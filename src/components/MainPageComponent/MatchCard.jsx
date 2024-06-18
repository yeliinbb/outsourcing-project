import React from 'react';
import { IoMdArrowRoundForward } from 'react-icons/io';
import icon1 from '../../images/icon1.png';
import icon2 from '../../images/icon2.png';

const MatchCard = () => {
  return (
    <main className="w-full h-60 bg-darkgray ml-5 mt-5 rounded-2xl">
      <header className="flex justify-between items-center">
        <h1 className=" text-white ml-5 pt-5 text-l">현재 진행중인 경기</h1>
        <div className=" text-white mr-5 pt-5">
          <IoMdArrowRoundForward />
        </div>
      </header>
      <section>
        <div className="w-30 flex justify-around mt-5">
          <img src={icon1} className="w-20 h-20" />
          <img src={icon2} className="w-20 h-20" />
        </div>
        <div>
          <p className="w-full text-center mt-5 text-white text-3xl">4 vs 2</p>
        </div>
      </section>
    </main>
  );
};

export default MatchCard;
