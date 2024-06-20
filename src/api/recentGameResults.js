import puppeteer from 'puppeteer';
import { Parser } from 'json2csv'
import fs from 'fs'
import path from 'path';

export const getGameResult = async () => {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.setUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    );
    await page.goto('https://mykbostats.com', { waitUntil: 'networkidle2' });

    const results = await page.evaluate(() => {
      const gameContainer = document.querySelectorAll('.game-line-container')[1]
      const games = gameContainer.querySelectorAll('.game-line');
      const data = [];
      games.forEach((game) => {
        const homeScore = game
          .querySelector('.home-score')
          ?.textContent.trim()
        const awayScore = game
          .querySelector('.away-score')
          ?.textContent.trim()
        const homeTeam = game
          .querySelector('.home-team')
          ?.textContent.trim()
          .split('\n')[0];
        const awayTeam = game
          .querySelector('.away-team')
          ?.textContent.trim()
          .split('\n')[0];

        if (awayScore && homeScore  && homeTeam && awayTeam) {
          data.push({ awayScore, homeScore, homeTeam, awayTeam});
        }
      });
      return data;
    });
    const json2csvParser = new Parser();
    const csv = json2csvParser.parse(results);

    const dirPath = path.resolve('../csv');
    const filePath = path.join(dirPath, 'gameResults.csv');

    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    fs.writeFileSync(filePath, csv);

    await browser.close();
  } catch (error) {
    console.error('Error fetching results:', error);
  }
};
getGameResult()