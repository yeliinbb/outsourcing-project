import { useEffect, useState } from 'react';
import api from '../api/api';

const YoutubeTest = ({
  playlistId,
  searchKeyword,
  currentPage,
  setCurrentPage,
}) => {
  const [videos, setVideos] = useState([]);
  const [totalPages, setTotalPages] = useState(1); // 전체 페이지 상태 추가
  const itemsPerPage = 12; // 페이지당 항목 수

  useEffect(() => {
    const fetchData = async () => {
      try {
        const playlistData = await api.youtube.fetchPlaylistItems(playlistId);

        if (!playlistData || !playlistData.items) {
          throw new Error('Playlist data is undefined');
        }

        const playlistItems = playlistData.items;

        let filteredItems = playlistItems;

        if (searchKeyword) {
          filteredItems = playlistItems.filter((item) => {
            const itemTitle = item.snippet.title.trim().toLowerCase();
            return itemTitle.includes(searchKeyword.trim().toLowerCase());
          });
        }

        // 페이지네이션을 위한 전체 페이지 수 설정
        setTotalPages(Math.ceil(filteredItems.length / itemsPerPage));

        // 현재 페이지에 해당하는 항목만 가져오기
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const currentItems = filteredItems.slice(startIndex, endIndex);

        if (currentItems.length > 0) {
          const videoIds = currentItems.map(
            (item) => item.contentDetails.videoId
          );
          const videoDetails = await api.youtube.fetchVideoDetails(videoIds);

          const videosWithDetails = currentItems.map((item) => {
            const videoDetail = videoDetails.find(
              (detail) => detail.id === item.contentDetails.videoId
            );
            return {
              ...item,
              statistics: videoDetail.statistics,
            };
          });

          setVideos(videosWithDetails);
        } else {
          setVideos([]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [searchKeyword, currentPage, playlistId]);

  // 페이지 변경 핸들러
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // 페이지 번호 렌더링 함수
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          disabled={i === currentPage}
          style={{ margin: '0 5px', padding: '5px 10px' }}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="p-6">
      <div className="grid grid-cols-3 gap-4">
        {videos.map((item) => (
          <div
            key={item.contentDetails.videoId}
            className="bg-gray-800 text-white p-4 rounded shadow flex flex-col items-center"
          >
            <h2 className="text-lg font-semibold mb-2">{item.snippet.title}</h2>
            <a
              href={`https://www.youtube.com/watch?v=${item.contentDetails.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={item.snippet.thumbnails.high.url}
                alt={item.snippet.title}
                className=" mb-2 transform transition-transform duration-300 hover:scale-105 hover:opacity-90"
              />
            </a>
            <p>조회수: {item.statistics.viewCount}</p>
            <p>좋아요 수: {item.statistics.likeCount}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center">{renderPageNumbers()}</div>
    </div>
  );
};

export default YoutubeTest;
