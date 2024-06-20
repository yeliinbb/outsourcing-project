import React from 'react';
import home from '../../assets/images/home.png';
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
import { useNavigate, useParams } from 'react-router';

const imagePaths = [
  {
    number: 1,
    title: 'icon1',
    image: Kiwoom,
  },
  {
    number: 2,
    title: 'icon2',
    image: Doosan,
  },
  {
    number: 3,
    title: 'icon3',
    image: Samsung,
  },
  {
    number: 4,
    title: 'icon4',
    image: SSG,
  },
  {
    number: 5,
    title: 'icon5',
    image: Kia,
  },
  {
    number: 6,
    title: 'icon6',
    image: NC,
  },
  {
    number: 7,
    title: 'icon7',
    image: KT,
  },
  {
    number: 8,
    title: 'icon8',
    image: LG,
  },
  {
    number: 9,
    title: 'icon9',
    image: Lotte,
  },
  {
    number: 10,
    title: 'icon10',
    image: Hanwha,
  },
];

const NavBar = () => {
  const { id } = useParams();
  console.log(id);

  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleIconClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="w-20 h-full bg-darkgray flex flex-col items-center justify-center">
      <img
        onClick={handleHomeClick}
        src={home}
        alt="homeIcon"
        className="mb-10 cursor-pointer"
      />
      <div className="grid gap-3 justify-items-center">
        {imagePaths.map((item, index) => (
          <div
            key={index}
            className={`col-sm-12 w-[79px] p-1 ${item.number === +id && 'bg-[#D9D9D9]'}`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="mx-auto h-11 w-11 cursor-pointer"
              onClick={() => handleIconClick(item.number)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
