import React from 'react';
import Kiwoom from '../../assets/logo/Kiwoom.svg';
import Doosan from '../../assets/logo/Doosan.svg';
import Samsung from '../../assets/logo/Samsung.svg';
import SSG from '../../assets/logo/SSG.svg';
import Kia from '../../assets/logo/Kia.svg';
import NC from '../../assets/logo/NC.svg';
import KT from '../../assets/logo/KT.svg';
import LG from '../../assets/logo/LG.svg';
import Lotte from '../../assets/logo/Lotte.svg';
import Hanwha from '../../assets/logo/Hanwha.svg';
import SwiperImage from './SwiperImage';

const imagePaths = [
  {
    image: Kiwoom,
  },
  {
    image: Doosan,
  },
  {
    image: Samsung,
  },
  {
    image: SSG,
  },
  {
    image: Kia,
  },
  {
    image: NC,
  },
  {
    image: KT,
  },
  {
    image: LG,
  },
  {
    image: Lotte,
  },
  {
    image: Hanwha,
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
