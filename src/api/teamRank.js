
import puppeteer from "puppeteer";

const getTeamRank = async () => {
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
        let rank = cells[0]?.textContent.trim();
        let teamName = cells[1]?.textContent.trim();
        const wins = cells[2]?.textContent.trim();
        const losses = cells[3]?.textContent.trim();
        const ties = cells[4]?.textContent.trim();

        const rankMatch = rank.match(/^(\d+)\s+(\S.+)$/);
        if (rankMatch) {
          rank = rankMatch[1];
          teamName = rankMatch[2];
        }

        data.push({ rank, teamName, wins, losses, ties });
      });
      return data;
    });

    console.log(teams);

    await browser.close();
  } catch (error) {
    console.error(error);
  }
};

getTeamRank();