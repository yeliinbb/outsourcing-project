import React from 'react';
import Kiwoom from '../../assets/logo/Kiwoom.svg';
import Doosan from '../../assets/logo/Doosan.svg';

const MatchCard = () => {
  return (
    <main className="w-full h-60 bg-darkgray ml-5 mt-5 rounded-2xl">
      <header className="flex justify-between items-center">
        <h1 className=" text-white ml-5 pt-5 text-l">현재 진행중인 경기</h1>
        <div className=" text-white mr-5 pt-5">
          {/* <IoMdArrowRoundForward /> */}
        </div>
      </header>
      <section>
        <div className="w-30 flex justify-around mt-5">
          <img src={Kiwoom} className="w-20 h-20" />
          <img src={Doosan} className="w-20 h-20" />
        </div>
        <div>
          <p className="w-full text-center mt-5 text-white text-3xl">4 vs 2</p>
        </div>
      </section>
    </main>
  );
};

export default MatchCard;
