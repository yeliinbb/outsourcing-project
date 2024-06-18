import puppeteer from "puppeteer";
import { Parser } from 'json2csv'
import fs from 'fs'
import path from "path";
import csvParser from "csv-parser";
import supabase from "../supabase/supabaseClient";
import { error } from "console";
import { data } from "autoprefixer";

export const getTodaySchedule = async () => {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');
    await page.goto('https://mykbostats.com', { waitUntil: 'networkidle2' });

    const schedule = await page.evaluate(() => {
      const games = document.querySelectorAll('.game-line');
      const data = [];
      games.forEach(game => {
        const date = document.querySelector('time[datetime]')?.getAttribute('datetime').split('T')[0];
        const time = game.querySelector('time[datetime]')?.textContent.trim();
        const homeTeam = game.querySelector('.home-team')?.textContent.trim().split('\n')[0]; 
        const awayTeam = game.querySelector('.away-team')?.textContent.trim().split('\n')[0]; 
        const location = game.querySelector('.venue')?.textContent.trim(); 
        
        data.push({ date, time, homeTeam, awayTeam, location });
      });
      return data;
    });

    // console.log(schedule);
    const json2csvParser = new Parser()
    const csv = json2csvParser.parse(schedule)

    const dirPath = path.resolve('../csv')
    const filePath = path.join(dirPath, 'gameSchedule.csv')

    if(fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, {recursive : true})
    }
    fs.writeFileSync(filePath, csv)

    const results = []
    fs.createReadStream(filePath)
      .pipe(csvParser())
      .on('data', (data) => results.push(data))
      .on('end', async () => {
        const { data, error} = await supabase
          .from('gameSchedule')
          .insert(results)
      })
      if(error) {
        console.error(error)
      } else {
        console.log('success', data)
      }

    await browser.close();
  } catch (error) {
    console.error("Error fetching schedule:", error);
  }
};

getTodaySchedule();

