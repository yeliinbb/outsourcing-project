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

  // 게임 스케줄 데이터에 있는 도시 이름에 따라 날씨 데이터 가져오기
  // const { data: weatherData } = useQuery({
  //   queryKey: ['weather'],
  //   queryFn: async (context) => {
  //     const { queryKey, meta, signal, pageParam } = context;
  //     // console.log(cityNames.Seoul);
  //     // return await fetchWeatherData(location);
  //     return await fetchWeatherData(cityNames.Seoul);
  //   },
  //   enabled: isGameScheduleSuccess, // 게임 스케줄 데이터가 성공적으로 로드된 후에만 날씨 데이터 가져오기
  // });

  console.log('gameScheduleData => ', gameScheduleData);

  // 날씨 데이터와 게임 스케줄 데이터를 병합하는 함수
  // const mergeData = useCallback((gameSchedule, weather) => {
  //   const weatherInfo = weather ? weather.weather[0].main : '';
  //   return gameSchedule.map((data) => ({ ...data, weather: weatherInfo }));
  // }, []);

  // useEffect(() => {
  //   // 게임 스케줄 데이터에서 받은 날씨 정보 gameInfo에 새로운 키로 넣어주기
  //   if (isGameScheduleSuccess && weatherData) {
  //     // const { main, name, weather } = weatherData;
  //     // setWeatherInfo(weather[0].main);
  //     // console.log('weatherInfo => ', weatherInfo);
  //     // const newData = gameScheduleData.map((data) => {
  //     //   return { ...data, weather: weatherInfo };
  //     // });
  //     // console.log('newData => ', newData);

  //     const mergedData = mergeData(gameScheduleData, weatherData);
  //     setGameInfo(mergedData);
  //   }
  // }, [weatherData, gameScheduleData, isGameScheduleSuccess, mergeData]);

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
