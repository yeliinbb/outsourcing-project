import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import DetailPageTags from '../../components/DetailPageTags';
import supabase from '../../supabase/supabaseClient';
import Comment from '../../components/Comment';
import YoutubeTest from '../../components/YoutubeTest';
import { useEffect, useState } from 'react';

const DetailPage = () => {
  const [playlistId, setPlaylistId] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const { id } = useParams();

  const getPlaylistId = (id) => {
    const playlists = {
      1: 'PLYxgcTlkQOzhq7NYAc7Wsoak6dkwFqTrq',
      2: 'PLgbBASjz_-Qatcq4MbIV9u9-1o5YXJxoI',
      3: 'PLkXXwsF-ojWyLqf2u0VaVXO-LGCMxyPSe',
      4: 'PL8_8tSGm7y1Ch1SD1QEIdrF6AhZp9cG5N',
      5: 'PLz-ZeGBrdzH3V0mpqlg5dWM8h4hogL2En',
      6: 'PLTk72eULaCiD4kdI_GO1vOx10l6Wjyj-n',
      7: 'PLTk72eULaCiC3B89kzsiX1YsiwqJmstpD',
      8: 'PLdr_-welsg4fqbQ46xiAF1T0b-0pZZwXP',
      9: 'PLe2tqH9V70CNIguRk5Dw89Rkwj7Q8yh3M',
      10: 'PLH13Vc2FtHHguyxRNXcHgy84PHYgxBGuc',
    };
    return playlists[id];
  };

  useEffect(() => {
    setPlaylistId(getPlaylistId(id));
    setSearchKeyword('');
  }, [id]);

  const {
    data: teamData,
    isPending,
    error: teamError,
  } = useQuery({
    queryKey: ['teamData', id],
    queryFn: async () => {
      const { data } = await supabase
        .from('KBOTeam')
        .select('*')
        .eq('id', id)
        .single();
      return data;
    },
  });

  const { data: keywordsData = [], error: keywordsError } = useQuery({
    queryKey: ['keywords', id],
    queryFn: async () => {
      const { data } = await supabase
        .from('KBOTeamKeyword')
        .select('keyword')
        .eq('id', id)
        .single();
      return data ? data.keyword : [];
    },
  });

  if (teamError || keywordsError) return <div>Error loading data</div>;

  const handleSearch = (event) => {
    event.preventDefault();
    const keyword = event.target.elements.keyword.value;
    setSearchKeyword(keyword);
    setCurrentPage(1); // 검색 시 현재 페이지를 1로 초기화
  };

  const handleTagClick = (tag) => {
    setSearchKeyword(tag);
    setCurrentPage(1); // 태그 클릭 시 현재 페이지를 1로 초기화
  };

  // console.log(isPending);
  return (
    <div className="bg-bgGray h-screen">
      <section className="relative aspect-w-16 aspect-h-9">
        {isPending ? <Loading /> : <Banner teamData={teamData} />}
      </section>
      <section className="mx-auto w-[90%]">
        <div className="my-2">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              name="keyword"
              placeholder="검색어 입력"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              className="text-white w-72 bg-[#272727] p-2 indent-9 outline-none rounded"
            />
            <button type="submit"></button>
          </form>
          {keywordsData && keywordsData.length > 0 && (
            <DetailPageTags words={keywordsData} onTagClick={handleTagClick} />
          )}
        </div>
      </section>
      <YoutubeTest
        playlistId={playlistId}
        searchKeyword={searchKeyword}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Comment />
    </div>
  );
};

export default DetailPage;

const Loading = () => {
  return (
    <div
      role="status"
      className="h-[330px] bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

const Banner = ({ teamData }) => {
  return (
    <>
      <img
        className={'w-full h-full inset-0 object-cover'}
        src={teamData.bannerImage}
        alt=""
      />
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
        <p className="leading-8 line-clamp-3">{teamData.introduction}</p>
      </div>
    </>
  );
};
