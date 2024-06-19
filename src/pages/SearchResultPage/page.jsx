import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import SearchInput from '../../components/SearchInput';
import Tags from '../../components/Tags';
import Video from '../../components/Video';
import initialData from './InitialSearchResult.json';

function SeacrhResultPage() {
  const { keyword } = useParams();
  // eslint-disable-next-line no-unused-vars
  const [list, setList] = useState(initialData.items);
  const tags = ['안치홍', '안치홍', '안치홍', '안치홍', '안치홍'];

  useEffect(() => {
    console.log(keyword);
    // youtube API -> setList
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
