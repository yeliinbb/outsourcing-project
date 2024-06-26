import { useQuery } from '@tanstack/react-query';
import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import api from '../../api/api';
import SearchInput from '../../components/SearchInput';
import Tags from '../../components/Tags';
import Video from '../../components/Video';

function SearchResultPage() {
  const [params] = useSearchParams();
  const keyword = params.get('w') || '';
  const [list, setList] = useState([]);
  const [nextPageToken, setNextPageToken] = useState();

  const playlistId = 'PLTk72eULaCiC7vjbNk-b3dZ_6ufhy9bfR';
  const { data, isSuccess } = useQuery({
    queryKey: ['youtube', { playlistId }],
    queryFn: async () => api.youtube.fetchPlaylistItems(playlistId),
  });

  useEffect(() => {
    if (isSuccess) {
      setList(data.items);
      setNextPageToken(data.nextPageToken);
    }
  }, [isSuccess, data]);

  const handleMoreVideo = async () => {
    const { items, nextPageToken: token } =
      await api.youtube.fetchPlaylistItems(playlistId, nextPageToken);

    setList((prevList) => [...prevList, ...items]);
    setNextPageToken(token);
  };

  const getFilteredList = useCallback(
    (list) => {
      const lowerKeyword = keyword.toLowerCase();
      const filteredList = list.filter(
        (item) =>
          item.snippet.title.toLowerCase().includes(lowerKeyword) ||
          item.snippet.description.toLowerCase().includes(lowerKeyword)
      );

      // 3의 배수 갯수로 자르기
      return filteredList.length % 3
        ? filteredList.slice(0, filteredList.length - (filteredList.length % 3))
        : filteredList;
    },
    [keyword]
  );

  const videos = getFilteredList(list);

  return (
    <main className="py-12">
      <div className="px-4">
        <SearchInput value={keyword} />
        <div className="py-3">
          <Tags words={TAGS} />
        </div>
        <ul className="py-7 flex flex-wrap">
          {!videos.length ? (
            <div>
              <h3>검색 결과가 없습니다.</h3>
            </div>
          ) : (
            videos.map((item) => (
              <li key={item.id} className="w-1/3 min-w-80 px-2">
                <Video item={item.snippet} />
              </li>
            ))
          )}
        </ul>
        <button
          className="w-full border border-solid py-2 border-darkgray hover:bg-darkgray hover:text-white"
          onClick={handleMoreVideo}
        >
          ...더보기
        </button>
      </div>
    </main>
  );
}

export default SearchResultPage;

const TAGS = [
  '하이라이트',
  'SSG',
  '롯데',
  'NC',
  'KIA',
  '삼성',
  '두산',
  'LG',
  'KT',
  '한화',
  '키움',
];
