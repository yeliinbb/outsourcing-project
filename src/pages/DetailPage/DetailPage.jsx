import { useEffect, useState } from 'react';
import supabase from '../../supabase/supabaseClient';

const DetailPage = () => {
  const [teamData, setTeamData] = useState(null);

  useEffect(() => {
    const selectTeamData = async () => {
      try {
        const { data: teamData } = await supabase
          .from('KBOTeam')
          .select('*')
          .eq('id', '2');
        console.log(teamData);
        setTeamData(teamData[0]);
      } catch (error) {
        console.log(error);
      }
    };
    selectTeamData();
  }, []);

  if (!teamData) return;
  console.log(teamData);
  return (
    <>
      <div className="bg-bgGray h-screen">
        <section className="border border-solid relative">
          <img className={'w-full'} src={teamData.bannerImage} alt="" />
          <ul className="absolute top-24 right-44 flex gap-16 text-white text-xl">
            <li>
              <div className="text-center">
                <p className="mb-2 font-bold">연고지</p>
                <p>{teamData.location}</p>
              </div>
            </li>
            <li>
              <div className="text-center">
                <p className="mb-2 font-bold">홈구장</p>
                <p>{teamData.home}</p>
              </div>
            </li>
            <li>
              <div className="text-center">
                <p className="mb-2 font-bold">구단주</p>
                <p>{teamData.owner}</p>
              </div>
            </li>
            <li>
              <div className="text-center">
                <p className="mb-2 font-bold">감독</p>
                <p>{teamData.manager}</p>
              </div>
            </li>
            <li className="mb-2">
              <div className="text-center">
                <p className="mb-2 font-bold">우승 연도</p>
                <div>
                  {teamData.winYears.slice(0, 3).map((year) => (
                    <div>{year}</div>
                  ))}
                </div>
              </div>
            </li>
          </ul>
          <div className="absolute bottom-14 right-10 text-white w-2/4">
            <p className="mb-2 text-xl font-bold">구단 소개</p>
            <p className="leading-8">{teamData.introduction}</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default DetailPage;
