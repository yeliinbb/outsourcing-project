import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSnowflake, faSun } from '@fortawesome/free-regular-svg-icons';
import {
  faBolt,
  faCloud,
  faCloudRain,
  faWind,
} from '@fortawesome/free-solid-svg-icons';
import Samsung from '../../assets/logo/Samsung.svg';
import LG from '../../assets/logo/LG.svg';
import Kia from '../../assets/logo/Kia.svg';
import NC from '../../assets/logo/NC.svg';
import Doosan from '../../assets/logo/Doosan.svg';
import Hanwha from '../../assets/logo/Hanwha.svg';
import Kiwoom from '../../assets/logo/Kiwoom.svg';
import Lotte from '../../assets/logo/Lotte.svg';
import KT from '../../assets/logo/KT.svg';
import SSG from '../../assets/logo/SSG.svg';

const GameList = ({ gameInfo, weatherInfo }) => {
  // 임시로 만들어 둔 팀별 로고 데이터
  const logos = {
    LG: LG,
    Kia: Kia,
    NC: NC,
    Samsung: Samsung,
    Doosan: Doosan,
    KT: KT,
    Lotte: Lotte,
    Kiwoom: Kiwoom,
    Hanwha: Hanwha,
    SSG: SSG,
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
    <li className="flex items-center justify-between p-3 border-y-neutral-50 border-solid border-b gap-20 max-h-10">
      <div className="flex items-center justify-between gap-8 w-[50%]">
        <div className="w-fit gap-8 flex ">
          <span>{gameInfo.time}</span>
          <span>{gameInfo.location.split('-', 1)}</span>
        </div>
        <div>
          <FontAwesomeIcon
            className="w-5 h-5"
            icon={weatherIcons[weatherInfo]}
          />
        </div>
      </div>
      <div className="flex items-center justify-between gap-3 w-full">
        <div className="flex items-center gap-3 w-[50%]">
          <p>{gameInfo.homeTeam}</p>
          <img src={logos[gameInfo.homeTeam]} className="w-8 h-8" />
        </div>
        <span>vs</span>
        <div className="flex items-center justify-end gap-3 w-[50%]">
          <img src={logos[gameInfo.awayTeam]} className="w-8 h-8" />
          <p>{gameInfo.awayTeam}</p>
          <div className="w-4 h-4 bg-bgGray flex items-center justify-center p-3 rounded-lg">
            <span>홈</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default GameList;
