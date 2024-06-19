import { useEffect, useState } from 'react';
import supabase from '../../supabase/supabaseClient';
import Tags from '../../components/Tags';
import Comment from '../../components/Comment';

const DetailPage = () => {
  const [teamData, setTeamData] = useState(null);
  const [keyword, setKeyword] = useState([]);

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

    const keywordHandler = async () => {
      try {
        const { data: keyword } = await supabase
          .from('KBOTeamKeyword')
          .select('*')
          .eq('id', '2');
        setKeyword(keyword);
      } catch (error) {
        console.log(error);
      }
    };
    keywordHandler();
  }, []);

  if (!teamData) return;
  console.log(keyword);
  return (
    <>
      <div className="flex flex-col bg-bgGray w-full h-screen bg-bggray">
        <section className="border border-solid relative w-full">
          <img className={'w-full'} src={teamData.bannerImage} alt="" />
          <ul className="absolute top-16 right-44 flex gap-16 text-white text-xl">
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
                <p className="mb-2 font-bold">우승 기록</p>
                <div>
                  {teamData.winYears.map((year) => (
                    <div>{year}</div>
                  ))}
                </div>
              </div>
            </li>
          </ul>
          <div className="absolute bottom-10 right-36 text-white w-2/5">
            <p className="mb-2 text-xl font-bold">구단 소개</p>
            <p className="leading-8">{teamData.introduction}</p>
          </div>
        </section>
        <section className=" bg-white mx-auto w-[100%]">
          {keyword.length > 0 && <Tags words={keyword[0]} />}
        </section>
        <Comment />
      </div>
    </>
  );
};

export default DetailPage;
