// SeacrhResultPage.js
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import api from '../../api/api';
import SearchInput from '../../components/SearchInput';
import Tags from '../../components/Tags';
import Video from '../../components/Video';

const tags = ['하이라이트', 'KBO', '야구'];
const playlistId = 'PLTk72eULaCiC7vjbNk-b3dZ_6ufhy9bfR';

function SeacrhResultPage() {
  const { keyword } = useParams();
  const tags = [
    '하이라이트',
    'SSG',
    '롯데 ',
    'NC',
    'KIA',
    '삼성',
    '두산',
    'LG',
    'KT',
    '한화',
    '키움',
  ];
  const playlistId = 'PLTk72eULaCiC7vjbNk-b3dZ_6ufhy9bfR';
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchPlaylistItems = async () => {
      const response = await api.youtube.fetchPlaylistItems(playlistId);
      const items = response.items; // 가져온 데이터에서 items를 추출합니다.

      setList(items);
    };
    fetchPlaylistItems();
  }, []);

  const videos = list.filter(
    (item) =>
      item.snippet.title.toLowerCase().includes(keyword.toLowerCase()) ||
      item.snippet.description.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <main className="py-12">
      <div className="px-4">
        <SearchInput value={keyword} />
        <div className="py-3">
          <Tags words={tags} />
        </div>
        <ul className="py-7 flex flex-wrap">
          {!videos.length ? (
            <div className="">
              <h3>검색 결과가 없습니다.</h3>
            </div>
          ) : (
            videos.map((item, i) => (
              <li key={i} className="w-1/3 min-w-80 px-2">
                <Video item={item.snippet} />
              </li>
            ))
          )}
        </ul>
      </div>
    </main>
  );
}

export default SeacrhResultPage;
