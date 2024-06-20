import React, { useEffect, useState } from 'react';
import api from '../../api/api';
import SwiperImage from './SwiperImage';

const VideoComp = ({ playlistId }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await api.youtube.fetchPlaylistItems(playlistId);

        setVideos(data.items);
      } catch (error) {
        console.error('Error fetching playlist items:', error);
      }
    };

    fetchVideos();
  }, [playlistId]);

  return (
    <div className="w-[96%] h-[100%] mt-5 ml-5 bg-darkgray rounded-2xl">
      <SwiperImage videos={videos} />
    </div>
  );
};

export default VideoComp;
