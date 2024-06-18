import React from 'react';

const teamRank = [
  {
    number: 1,
    title: 'KIA',
  },
  {
    number: 2,
    title: 'LG',
  },
  {
    number: 3,
    title: '두산',
  },
  {
    number: 4,
    title: '삼성',
  },
  {
    number: 5,
    title: 'SSG',
  },
  {
    number: 6,
    title: 'NC',
  },
  {
    number: 7,
    title: '한화',
  },
  {
    number: 8,
    title: '롯데',
  },
  {
    number: 9,
    title: 'KT',
  },
  {
    number: 10,
    title: '키움',
  },
];

const RankCard = () => {
  return (
    <main className="w-72 h-96 bg-darkgray ml-5 mt-5 rounded-2xl">
      <header className="flex justify-between items-center">
        <h1 className=" text-white ml-5 pt-5 text-l">팀 순위</h1>
      </header>
      <section className="ml-5 mt-5 grid gap-2.5">
        {teamRank.map((team, index) => (
          <div key={index} className="text-white">
            {team.number}. {team.title}
          </div>
        ))}
      </section>
    </main>
  );
};

export default RankCard;
