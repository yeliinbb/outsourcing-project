import React from 'react';

const teamRank = [
  {
    number: 1,
    title: 'KIA',
    game: 70,
    win: 41,
    draw: 1,
    lose: 28,
    odds: 0.594,
  },
  {
    number: 2,
    title: 'LG',
    game: 70,
    win: 41,
    draw: 1,
    lose: 28,
    odds: 0.594,
  },
  {
    number: 3,
    title: '두산',
    game: 70,
    win: 41,
    draw: 1,
    lose: 28,
    odds: 0.594,
  },
  {
    number: 4,
    title: '삼성',
    game: 70,
    win: 41,
    draw: 1,
    lose: 28,
    odds: 0.594,
  },
  {
    number: 5,
    title: 'SSG',
    game: 70,
    win: 41,
    draw: 1,
    lose: 28,
    odds: 0.594,
  },
  {
    number: 6,
    title: 'NC',
    game: 70,
    win: 41,
    draw: 1,
    lose: 28,
    odds: 0.594,
  },
  {
    number: 7,
    title: '한화',
    game: 70,
    win: 41,
    draw: 1,
    lose: 28,
    odds: 0.594,
  },
  {
    number: 8,
    title: '롯데',
    game: 70,
    win: 41,
    draw: 1,
    lose: 28,
    odds: 0.594,
  },
  {
    number: 9,
    title: 'KT',
    game: 70,
    win: 41,
    draw: 1,
    lose: 28,
    odds: 0.594,
  },
  {
    number: 10,
    title: '키움',
    game: 70,
    win: 41,
    draw: 1,
    lose: 28,
    odds: 0.594,
  },
];

const RankCard = () => {
  return (
    <main
      className="w-full h-[95%] bg-darkgray ml-5 rounded-2xl overflow-hidden"
      style={{ borderRadius: '1rem' }}
    >
      <header className="flex justify-between items-center">
        <h1 className="text-white ml-5 mt-5 mb-5 text-l">팀 순위</h1>
      </header>
      <section className="items-center text-center justify-center h-full">
        <div className="w-[90%] h-[80%] mt-3 grid grid-cols-7 grid-row-10 text-white items-center gap-y-[1vh]">
          {teamRank.map((team, index) => (
            <React.Fragment key={index}>
              <div>{team.number}</div>
              <div>{team.title}</div>
              <div>{team.game}</div>
              <div>{team.win}</div>
              <div>{team.draw}</div>
              <div>{team.lose}</div>
              <div>{team.odds}</div>
            </React.Fragment>
          ))}
        </div>
      </section>
    </main>
  );
};

export default RankCard;
