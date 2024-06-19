import React from 'react';
import hongpro from '../../images/hongpro.jpeg';
import cbo5penr from '../../images/cbo5penr.jpeg';
import keystoneplay from '../../images/keystoneplay.jpeg';
import nomaTV from '../../images/nomaTV.jpeg';

const youtuberList = [
  {
    number: 1,
    name: '홍프로',
    img: hongpro,
  },
  {
    number: 2,
    name: '크보5프너',
    img: cbo5penr,
  },
  {
    number: 3,
    name: '키스톤플레이',
    img: keystoneplay,
  },
  // {
  //  number : 1,
  //   name: '노마TV',
  //   img: nomaTV,
  // },
];

const YouTuberList = () => {
  return (
    <div className="w-[30%] h-[77%] ml-5 mr-5 bg-darkgray rounded-2xl">
      <ul>
        <h1 className="text-white mt-3 text-center font-semibold">
          추천 유튜버
        </h1>
        {youtuberList.map((youtuber) => (
          <div className="flex items-center">
            <h1 className="text-lg font-semibold ml-5 mt-2 text-white">
              {youtuber.number}
            </h1>
            <img
              src={youtuber.img}
              className="w-12 h-12 rounded-full mt-2 ml-5"
            />
            <li className="mt-2 ml-5 text-white">{youtuber.name}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default YouTuberList;
