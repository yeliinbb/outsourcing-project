import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import api from '../../api/api';

const MatchCard = () => {
  const [index, setIndex] = useState(0);
  const { data: games, isSuccess } = useQuery({
    queryKey: ['gameResults'],
    queryFn: () => api.game.getRecentResults(),
  });

  console.log('MatchCard', games);
  const handleOnClick = (number) => {
    const maxCount = games.length;
    setIndex((i) => {
      const nextIndex = i + number;
      return nextIndex < 0 ? maxCount + 1 - number : nextIndex % maxCount;
    });
  };

  const game = isSuccess ? games[index] : {};
  console.log(game);
  useEffect(() => {}, [isSuccess, index]);

  return (
    <main className="w-full bg-darkgray ml-5 mt-5 rounded-2xl">
      <header className="flex justify-between items-center">
        <h1 className=" text-white ml-5 pt-5 text-l">최근 경기 결과</h1>
        <div className=" text-white mr-5 pt-5">
          {/* <IoMdArrowRoundForward /> */}
        </div>
      </header>
      <section className="flex flex-row justify-between items-center px-5 py-7">
        <button
          className="bg-stone-900 rounded-full text-white px-2.5 pt-1 pb-1.5 hover:bg-stone-700"
          onClick={() => handleOnClick(-1)}
        >
          &lt;
        </button>
        <div className="w-30 flex flex-col justify-center items-center">
          <div className="flex flex-row text-white text-center">
            <span>
              <img
                src={`/src/assets/logo/${game.awayTeam}.svg`}
                className="w-20 h-20 mx-4 "
              />
              <span className="text-3xl font-bold">{game.awayScore}</span>
            </span>
            <span className="pt-10 text-xl"> vs. </span>
            <span>
              <img
                src={`/src/assets/logo/${game.homeTeam}.svg`}
                className="w-20 h-20 mx-4"
              />
              <span className="text-3xl font-bold">{game.homeScore}</span>
            </span>
          </div>
        </div>
        <button
          className="bg-stone-900 rounded-full text-white px-2.5 pt-1 pb-1.5 hover:bg-stone-700"
          onClick={() => handleOnClick(+1)}
        >
          &gt;
        </button>
      </section>
    </main>
  );
};

export default MatchCard;
