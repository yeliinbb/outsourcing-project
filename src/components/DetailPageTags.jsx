import { Link } from 'react-router-dom/dist';

function DetailPageTags({ words = [], onTagClick }) {
  const keywords = Array.isArray(words) ? words : [];

  return (
    <div className="pt-3 flex flex-wrap gap-1">
      {keywords.map((word, i) => (
        <button
          key={i}
          onClick={() => onTagClick(word)}
          className="bg-darkgray text-white py-1.5 px-4 rounded-full"
        >
          #{word}
        </button>
      ))}
    </div>
  );
}

export default DetailPageTags;
