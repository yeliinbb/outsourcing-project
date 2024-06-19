import puppeteer from "puppeteer";
import { Parser } from 'json2csv'
import fs from 'fs'
import path from "path";
import csvParser from 'csv-parser'

export const getTeamRank = async () => {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');
    await page.goto('https://mykbostats.com/', { waitUntil: 'networkidle2' });

    const teams = await page.evaluate(() => {
      const rows = document.querySelectorAll('tbody tr');
      const data = [];
      rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        const rank = cells[0]?.textContent.trim().split('\n')[0];
        const teamName = cells[0]?.textContent.trim().split('\n')[2];
        const wins = cells[1]?.textContent.trim();
        const losses = cells[2]?.textContent.trim();
        const draws = cells[3]?.textContent.trim()
        const ties = cells[4]?.textContent.trim();

        data.push({ rank : parseInt(rank), teamName, wins : parseInt(wins), losses : parseInt(losses), draws : parseInt(draws) , ties : parseFloat(ties) });
      });
      return data;
    });

    const json2csvParser = new Parser();
    const csv = json2csvParser.parse(teams);

    const dirPath = path.resolve('../csv');
    const filePath = path.join(dirPath, 'teamRank.csv');
    
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    fs.writeFileSync(filePath, csv);

    await browser.close();
  } catch (error) {
    console.error(error);
  }
};
getTeamRank()