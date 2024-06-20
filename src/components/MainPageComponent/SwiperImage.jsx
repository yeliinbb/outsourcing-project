import { useEffect, useState } from 'react';

const SwiperImage = ({ videos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  if (videos.length === 0) {
    return <div>Loading...</div>;
  }
  console.log('videos.length', videos.length);

  const currentVideo = videos[currentIndex];

  return (
    <div className="relative h-full flex items-center justify-center">
      <div
        className="text-white ml-5 absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-black bg-opacity-50 cursor-pointer z-10"
        onClick={prevSlide}
      >
        &lt;
      </div>
      <div className="w-full h-full flex justify-center items-center">
        {currentVideo && currentVideo.contentDetails && (
          <iframe
            width="80%"
            height="100%"
            src={`https://www.youtube.com/embed/${currentVideo.contentDetails.videoId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full max-w-full"
          ></iframe>
        )}
      </div>
      <div
        className="text-white mr-5 absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-black bg-opacity-60 cursor-pointer z-10"
        onClick={nextSlide}
      >
        &gt;
      </div>
    </div>
  );
};

export default SwiperImage;
