import supabase from '../../supabase/supabaseClient';
import Tags from '../../components/Tags';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';

const DetailPage = () => {
  const { id } = useParams();

  const selectTeamData = async () => {
    const { data: teamData } = await supabase
      .from('KBOTeam')
      .select('*')
      .eq('id', id);
    console.log(teamData);
    return teamData[0];
  };

  const { data: teamData } = useQuery({
    queryKey: ['teamData', id],
    queryFn: selectTeamData,
  });

  const keywordHandler = async () => {
    const { data: keyword } = await supabase
      .from('KBOTeamKeyword')
      .select('*')
      .eq('id', id);
    return keyword;
  };

  const { data: keyword = [] } = useQuery({
    queryKey: ['keyword', id],
    queryFn: keywordHandler,
  });

  if (!teamData) return;

  return (
    <>
      <div className="bg-bgGray h-screen">
        <section className="border border-solid relative">
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
                  {teamData.winYears.map((year, index) => (
                    <div key={index}>{year}</div>
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
        <section className="mx-auto w-[90%]">
          {keyword.length > 0 && <Tags words={keyword[0]} />}
        </section>
      </div>
    </>
  );
};

export default DetailPage;
