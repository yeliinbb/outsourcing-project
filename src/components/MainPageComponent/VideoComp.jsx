import React from 'react';
import icon1 from '../../assets/images/icon1.png';
import icon2 from '../../assets/images/icon2.png';
import icon3 from '../../assets/images/icon3.png';
import icon4 from '../../assets/images/icon4.png';
import icon5 from '../../assets/images/icon5.png';
import icon6 from '../../assets/images/icon6.png';
import icon7 from '../../assets/images/icon7.png';
import icon8 from '../../assets/images/icon8.png';
import icon9 from '../../assets/images/icon9.png';
import icon10 from '../../assets/images/icon10.png';
import SwiperImage from './SwiperImage';

const imagePaths = [
  {
    image: icon1,
  },
  {
    image: icon2,
  },
  {
    image: icon3,
  },
  {
    image: icon4,
  },
  {
    image: icon5,
  },
  {
    image: icon6,
  },
  {
    image: icon7,
  },
  {
    image: icon8,
  },
  {
    image: icon9,
  },
  {
    image: icon10,
  },
];

const VideoComp = () => {
  return (
    <div className="w-[96%] h-[100%] mt-5 ml-5 bg-darkgray rounded-2xl">
      <SwiperImage imagePaths={imagePaths} />
    </div>
  );
};

export default VideoComp;
