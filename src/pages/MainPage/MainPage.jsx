import React from 'react';
import MatchCard from '../../components/MainPageComponent/MatchCard';
import RankCard from '../../components/MainPageComponent/RankCard';
import WeatherByGame from '../../components/MainPageComponent/WeatherByGame';

const MainPage = () => {
  return (
    <div className="w-full h-full">
      <MatchCard />
      <RankCard />
      <WeatherByGame />
    </div>
  );
};

export default MainPage;
