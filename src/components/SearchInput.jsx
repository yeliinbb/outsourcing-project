import { useState } from 'react';
import IconSearch from '../assets/icons/search.svg';

function SearchInput() {
  const [keyword, setKeyword] = useState();

  return (
    <div className="flex flex-row">
      <input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search..."
        className="w-72 bg-[#272727] p-2 indent-9 outline-none rounded"
      />
      <img src={IconSearch} className="relative -left-[17.5rem]" />
    </div>
  );
}

export default SearchInput;
