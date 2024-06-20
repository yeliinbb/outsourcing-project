import React, { useEffect, useState } from 'react';
import supabase from '../../supabase/supabaseClient';

const RankCard = () => {
  const [teamRank, setTeamRank] = useState([]);

  useEffect(() => {
    const fetchTeamRank = async () => {
      const { data, error } = await supabase
        .from('teamRank')
        .select('*')
        .order('rank', { ascending: true });

      if (error) {
        console.error('Error fetching team rank:', error);
      } else {
        console.log('Fetched data:', data);
        setTeamRank(data);
      }
    };

    fetchTeamRank();
  }, []);

  const getShortTeamName = (teamName) => {
    return teamName.split(' ')[0];
  };

  return (
    <main
      className="items-center text-center justify-center w-full h-[95%] bg-darkgray ml-5 rounded-2xl overflow-hidden"
      style={{ borderRadius: '1rem' }}
    >
      <header className="flex justify-between items-center">
        <h1 className="text-white ml-5 mt-5 mb-5 text-l">팀 순위</h1>
      </header>
      <section className="flex text-center justify-center h-full max-h-[90%] max-w-[90%]">
        <div className="w-[90%] h-[80%] grid grid-cols-6 grid-row-10 text-white items-center gap-y-[1vh]">
          {teamRank.map((team) => (
            <React.Fragment key={team.id}>
              <div>{team.rank}</div>
              <div>{getShortTeamName(team.teamName)}</div>
              <div className="ml-10">{team.wins}</div>
              <div className="ml-8">{team.losses}</div>
              <div className="ml-8">{team.draws}</div>
              <div className="ml-6">{team.ties}</div>
            </React.Fragment>
          ))}
        </div>
      </section>
    </main>
  );
};

export default RankCard;
