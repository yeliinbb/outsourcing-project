import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import SearchInput from '../../components/SearchInput';
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
      <div className="px-2">
        <SearchInput />
        <div className="pt-3 flex flex-wrap gap-1">
          {tags.map((tag, i) => (
            <Link
              key={i}
              to={`/search/${tag}`}
              className="bg-darkgray text-white py-1.5 px-4 rounded-full"
            >
              #{tag}
            </Link>
          ))}
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
