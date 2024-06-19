import React from 'react';
import MatchCard from '../../components/MainPageComponent/MatchCard';
import RankCard from '../../components/MainPageComponent/RankCard';
import SearchInput from '../../components/MainPageComponent/SearchInput';
import VideoComp from '../../components/MainPageComponent/VideoComp';
import Tags from '../../components/Tags';
import YouTuberList from '../../components/MainPageComponent/YouTuberList';
import WeatherByGame from '../../components/MainPageComponent/WeatherByGame';

const MainPage = () => {
  const tags = ['안치홍', '안치홍', '안치홍', '안치홍', '안치홍'];

  return (
    <div className="flex h-screen">
      <div className="w-1/4 h-full flex flex-col">
        <div className="w-full h-72 flex items-center justify-center">
          <MatchCard />
        </div>
        <div className="flex-1 pr-5">
          <RankCard />
        </div>
      </div>
      <div className="w-3/4 h-full flex flex-col">
        <div className="flex items-center">
          <SearchInput className="mb-5" />
        </div>
        <div className="h-[100%] overflow-hidden">
          <div className="h-[60%]  rounded-2xl ">
            <VideoComp />
          </div>
          <div className="flex h-[40%] mt-5">
            <WeatherByGame />
            <YouTuberList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
