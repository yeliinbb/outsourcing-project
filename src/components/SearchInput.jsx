import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import IconSearch from '../assets/icons/search.svg';

function SearchInput({ value = '' }) {
  const [keyword, setKeyword] = useState(value);
  const navigate = useNavigate();

  useEffect(() => {
    setKeyword(value);
  }, [value]);

  const handleOnSearch = (e) => {
    e.preventDefault();
    navigate(`/search?w=${keyword}`);
  };

  return (
    <div className="flex flex-row">
      <form onSubmit={handleOnSearch}>
        <input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search..."
          className="w-72 bg-darkgray text-white p-2 indent-9 outline-none rounded"
        />
      </form>
      <img src={IconSearch} className="relative -left-[17.5rem]" />
    </div>
  );
}

export default SearchInput;
