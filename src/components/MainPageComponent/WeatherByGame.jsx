import React, { useCallback, useEffect, useState } from 'react';
import { fetchWeatherData, fetchWithWeatherData } from '../../api/weatherApi';
import { useQuery } from '@tanstack/react-query';
import { fetchGameSchedule } from '../../api/gameScheduleApi';
import GameList from './GameList';

const WeatherByGame = () => {
  const [gameInfo, setGameInfo] = useState([]);

  // 게임 스케줄 데이터 불러오기
  const {
    data: gameScheduleData,
    isPending: isGameSchedulePending,
    isSuccess: isGameScheduleSuccess,
  } = useQuery({
    queryKey: ['gameSchedule'],
    queryFn: fetchGameSchedule,
  });

  console.log('gameScheduleData => ', gameScheduleData);

  // 데이터 병합 및 상태 업데이트
  useEffect(() => {
    const fetchWeatherForGames = async () => {
      if (isGameScheduleSuccess) {
        try {
          const mergedData = await fetchWithWeatherData(gameScheduleData);
          setGameInfo(mergedData);
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      }
    };
    fetchWeatherForGames();
  }, [isGameScheduleSuccess, gameScheduleData]);

  console.log('gameInfo => ', gameInfo);

  if (isGameSchedulePending) {
    return <div>데이터를 가져오는 중입니다...</div>;
  }

  return (
    <div className="grid grid-rows-custom-layout flex-col w-[70%] h-[77%] ml-5 bg-darkgray rounded-2xl text-white p-5 gap-2 ">
      <p>경기 매치</p>
      <ul className=" w-full h-full grid auto-rows-[minmax(0,_0.8fr)] gap-0.5">
        {isGameScheduleSuccess &&
          gameInfo.map((game, index) => {
            return (
              <GameList
                key={index}
                weatherInfo={game.weather}
                gameInfo={game}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default WeatherByGame;
