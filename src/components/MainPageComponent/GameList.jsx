import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSnowflake, faSun } from '@fortawesome/free-regular-svg-icons';
import {
  faBolt,
  faCloud,
  faCloudRain,
  faWind,
} from '@fortawesome/free-solid-svg-icons';

const GameList = ({ gameInfo, weatherInfo }) => {
  // 임시로 만들어 둔 팀별 로고 데이터
  const logos = {
    Lg: `../assets/icons/lgtwins.svg`,
    Kia: `../assets/icons/kia.svg`,
    Nc: `../assets/icons/nc.svg`,
    Samsung: `../assets/icons/samsung.svg`,
  };

  const weatherIcons = {
    Clouds: faCloud,
    Snow: faSnowflake,
    Atmosphere: faWind,
    Thunderstorm: faBolt,
    Clear: faSun,
    Rain: faCloudRain,
  };

  return (
    <li className="flex items-center justify-between p-3 border-y-neutral-50 border-solid border-b">
      <div className="w-fit gap-6 flex items-center justify-between">
        <span>time</span>
        <span>location</span>
        <span>
          <FontAwesomeIcon
            className="w-5 h-5"
            icon={weatherIcons[weatherInfo]}
          />
        </span>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex flex-col items-center gap-1">
          <p>homeTeam</p>
          <p>손주영</p>
        </div>
        <img src={logos.Lg} />
        {/* <img src={`../assets/icons/${gameInfo.homeTeam}.svg`} /> */}
      </div>
      <span>예정</span>
      <div className="flex items-center gap-3">
        <img src={logos.Kia} />
        {/* <img src={`../assets/icons/${gameInfo.awayTeam}.svg`} /> */}
        <div className="flex flex-col items-center gap-1">
          <p>awayTeam</p>
          <p>양현종</p>
        </div>
        <div className="w-5 h-5 bg-darkgray flex items-center justify-center p-3 rounded-lg">
          <span>홈</span>
        </div>
      </div>
    </li>
  );
};

export default GameList;
