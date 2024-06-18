import React from 'react';
import MatchCard from '../../components/MainPageComponent/MatchCard';
import RankCard from '../../components/MainPageComponent/RankCard';
import SearchInput from '../../components/MainPageComponent/SearchInput';
import VideoComp from '../../components/MainPageComponent/VideoComp';
import Tags from '../../components/Tags';

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
      <div className="w-3/4 flex flex-col">
        <div className="flex items-center ">
          <SearchInput className="mb-5" />
          <Tags words={tags} />
        </div>
        <div className="flex-1 rounded-2xl overflow-hidden">
          <VideoComp />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
