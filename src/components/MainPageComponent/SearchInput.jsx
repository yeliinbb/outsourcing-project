import { useState } from 'react';
import IconSearch from '../../assets/icons/search.svg';
import { useNavigate } from 'react-router-dom';

function SearchInput() {
  const [keyword, setKeyword] = useState();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSearch = () => {
    if (keyword.trim() !== '') {
      navigate(`/search/${keyword}`);
    }
  };

  return (
    <div className="flex items-center flex-row mt-5 ml-5">
      <input
        value={keyword}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Search..."
        className="text-white w-72 bg-[#272727] p-2 indent-9 outline-none rounded"
      />
      <button onClick={handleSearch}>
        <img
          src={IconSearch}
          className="relative -left-[17.5rem]"
          alt="Search Icon"
        />
      </button>
    </div>
  );
}

export default SearchInput;
