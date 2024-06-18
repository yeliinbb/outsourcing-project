import React from 'react';

function Video({ item }) {
  const { width, height, url } = item.thumbnails.high;
  // `w-[${width}px] h-[${height}px]`
  return (
    <div className="flex flex-col pb-10 px-2">
      <img src={url} className="rounded" />
      <div className="tracking-tighter">
        <div className="text-sm font-semibold tracking-tighter">
          {item.title}
        </div>
        <div className="text-xs text-gray-600">{item.channelTitle}</div>
      </div>
    </div>
  );
}

export default Video;
