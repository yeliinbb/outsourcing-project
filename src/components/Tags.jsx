import { Link } from 'react-router-dom/dist';

function Tags({ words = [], onTagClick }) {
  const keywords = Array.isArray(words) ? words : [];

  return (
    <div className="pt-3 flex flex-wrap gap-1">
      {keywords.map((word, i) => (
        <Link
          key={i}
          to={`/search/${word}`}
          className="bg-darkgray text-white py-1.5 px-4 rounded-full hover:opacity-80"
          onClick={() => onTagClick(word)}
        >
          #{word}
        </Link>
      ))}
    </div>
  );
}

export default Tags;
