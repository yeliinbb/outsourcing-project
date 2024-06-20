// SeacrhResultPage.js
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import SearchInput from '../../components/SearchInput';
import Tags from '../../components/Tags';
import Video from '../../components/Video';
import initialData from './InitialSearchResult.json';
import YoutubeAPI from '../../api/YoutubeApi';

function SeacrhResultPage() {
  const { keyword } = useParams();
  const [list, setList] = useState(initialData.items);
  const tags = ['안치홍', '안치홍', '안치홍', '안치홍', '안치홍'];
  const playlistId = 'PLTk72eULaCiC7vjbNk-b3dZ_6ufhy9bfR';

  useEffect(() => {
    console.log(keyword);

    const fetchPlaylistItems = async () => {
      const youtubeAPI = new YoutubeAPI();
      const response = await youtubeAPI.fetchPlaylistItems(playlistId);
      const items = response.items; // 가져온 데이터에서 items를 추출합니다.

      // 검색 키워드에 따른 필터링
      const filteredItems = items.filter(
        (item) =>
          item.snippet.title.includes(keyword) ||
          item.snippet.description.includes(keyword)
      );
      setList(filteredItems);
    };

    if (keyword) {
      fetchPlaylistItems();
    }
  }, [keyword]);

  return (
    <main className="py-12">
      <div className="px-4">
        <SearchInput />
        <div className="py-3">
          <Tags words={tags} />
        </div>
      </div>
      <ul className="py-7 flex flex-wrap">
        {list.map((item, i) => (
          <li key={i} className="w-1/3 min-w-80 px-2">
            <Video item={item.snippet} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default SeacrhResultPage;
