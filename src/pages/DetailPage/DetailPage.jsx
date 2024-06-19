import { useEffect, useState } from 'react';
import supabase from '../../supabase/supabaseClient';
import Tags from '../../components/Tags';
import { useParams } from 'react-router';
import YoutubeTest from '../../components/YoutubeTest';

const DetailPage = () => {
  const [teamData, setTeamData] = useState(null);
  const [keyword, setKeyword] = useState([]);
  const [playlistId, setPlaylistId] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const selectTeamData = async () => {
      try {
        const { data: teamData } = await supabase
          .from('KBOTeam')
          .select('*')
          .eq('id', id);
        console.log('teamData => ', teamData);
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
          .eq('id', id);
        setKeyword(keyword);
      } catch (error) {
        console.log(error);
      }
    };
    keywordHandler();
  }, [id]);

  useEffect(() => {
    const getPlaylistId = (id) => {
      switch (id) {
        case '1':
          return 'PLYxgcTlkQOzhq7NYAc7Wsoak6dkwFqTrq';
        case '2':
          return 'PLgbBASjz_-Qatcq4MbIV9u9-1o5YXJxoI';
        case '3':
          return 'PLkXXwsF-ojWyLqf2u0VaVXO-LGCMxyPSe';
        case '4':
          return 'PL8_8tSGm7y1Ch1SD1QEIdrF6AhZp9cG5N';
        case '5':
          return 'PLz-ZeGBrdzH3V0mpqlg5dWM8h4hogL2En';
        case '6':
          return 'PLfsLTyo3tyK-m4UzA0Q8sqInL19ilwsuh';
        case '7':
          return 'PLE8rpoVmjLneczAUqTGQWF6ZfZdaVEJee';
        case '8':
          return 'PLdr_-welsg4fqbQ46xiAF1T0b-0pZZwXP';
        case '9':
          return 'PLe2tqH9V70CNIguRk5Dw89Rkwj7Q8yh3M';
        case '10':
          return 'PLH13Vc2FtHHguyxRNXcHgy84PHYgxBGuc';
      }
    };

    setPlaylistId(getPlaylistId(id));
  }, [id]);

  if (!teamData) return;
  console.log(keyword);

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
        <section className=" bg-white mx-auto w-[90%]">
          {keyword.length > 0 && <Tags words={keyword[0]} />}
        </section>
        <YoutubeTest playlistId={playlistId} />
      </div>
    </>
  );
};

export default DetailPage;
