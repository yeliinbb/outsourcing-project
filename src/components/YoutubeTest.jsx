import { useEffect, useState } from 'react';
import { fetchPlaylistItems } from '../api/youtubeApi';

const YoutubeTest = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const playlistId = 'PLH13Vc2FtHHguyxRNXcHgy84PHYgxBGuc';
    fetchPlaylistItems(playlistId).then((items) => setVideos(items));
  }, []);

  return (
    <div>
      <h1>재생목록</h1>
      <ul>
        {videos.map((item) => (
          <li key={item.id}>
            <h2>{item.snippet.title}</h2>
            <img
              src={item.snippet.thumbnails.default.url}
              alt={item.snippet.title}
            />
            {/* <p>{item.snippet.description}</p> */}
            <a
              href={`https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch Video
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YoutubeTest;
