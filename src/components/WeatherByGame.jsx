import React, { useCallback, useEffect, useState } from 'react';
import { fetchWeatherData, fetchWithWeatherData } from '../api/weatherApi';
import { useQuery } from '@tanstack/react-query';
import { fetchGameSchedule } from '../api/gameScheduleApi';
import GameList from './GameList';

const WeatherByGame = () => {
  const [gameInfo, setGameInfo] = useState([]);

  // 날씨 데이터 불러오기 위해 임시로 적어둔 도시 이름 데이터
  // const cityNames = {
  //   Seoul: 'Seoul',
  //   Incheon: 'Incheon',
  //   Busan: 'Busan',
  //   Gwangju: 'Gwangju',
  //   Daegu: 'Daegu',
  //   Cheongju: 'Cheongju',
  //   Changwon: 'Changwon',
  //   Suwon: 'Suwon',
  //   Daejeon: 'Daejeon',
  // };

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
    <div className="w-6/12 h-3/6 bg-bgGray rounded-xl text-white">
      <ul className="w-full flex flex-col p-3 gap-0.5">
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
