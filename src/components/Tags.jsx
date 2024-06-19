import { Link } from 'react-router-dom/dist';

function Tags({ words = [] }) {
  return (
    <div className="pt-3 flex flex-wrap gap-1">
      {words.map((word, i) => (
        <Link
          key={i}
          to={`/search/${word}`}
          className="bg-darkgray text-white py-1.5 px-4 rounded-full"
        >
          #{word}
        </Link>
      ))}
    </div>
  );
}

export default Tags;
