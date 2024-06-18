import React, { useState } from 'react';

const SwiperImage = ({ imagePaths }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imagePaths.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imagePaths.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative h-full flex items-center justify-center">
      <div
        className="text-white ml-5 absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-black bg-opacity-50 cursor-pointer z-10"
        onClick={prevSlide}
      >
        &lt;
      </div>
      <img
        src={imagePaths[currentIndex].image}
        alt={`Slide ${currentIndex + 1}`}
        className="h-full w-full object-cover rounded-2xl z-0"
      />
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
