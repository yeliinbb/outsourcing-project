import React from 'react';

function Video({ item }) {
  const { url } = item.thumbnails.high;
  const videoUrl = `https://www.youtube.com/watch?v=WF2zuYviq0Y&list=${item.playlistId}`;

  return (
    <div className="flex flex-col pb-10 px-2">
      <a href={videoUrl} target="_blank" rel="noopener noreferrer">
        <img src={url} className="rounded w-full" />
      </a>
      <div className="tracking-tighter">
        <div className="text-sm font-semibold tracking-tighter">
          {item.title}
        </div>
      </div>
    </div>
  );
}

export default Video;
