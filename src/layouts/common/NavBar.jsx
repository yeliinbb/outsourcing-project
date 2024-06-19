import React from 'react';
import home from '../../images/home.png';
import icon1 from '../../images/icon1.png';
import icon2 from '../../images/icon2.png';
import icon3 from '../../images/icon3.png';
import icon4 from '../../images/icon4.png';
import icon5 from '../../images/icon5.png';
import icon6 from '../../images/icon6.png';
import icon7 from '../../images/icon7.png';
import icon8 from '../../images/icon8.png';
import icon9 from '../../images/icon9.png';
import icon10 from '../../images/icon10.png';
import { useNavigate } from 'react-router';

const imagePaths = [
  {
    number: 1,
    title: 'icon1',
    image: icon1,
  },
  {
    number: 2,
    title: 'icon2',
    image: icon2,
  },
  {
    number: 3,
    title: 'icon3',
    image: icon3,
  },
  {
    number: 4,
    title: 'icon4',
    image: icon4,
  },
  {
    number: 5,
    title: 'icon5',
    image: icon5,
  },
  {
    number: 6,
    title: 'icon6',
    image: icon6,
  },
  {
    number: 7,
    title: 'icon7',
    image: icon7,
  },
  {
    number: 8,
    title: 'icon8',
    image: icon8,
  },
  {
    number: 9,
    title: 'icon9',
    image: icon9,
  },
  {
    number: 10,
    title: 'icon10',
    image: icon10,
  },
];

const NavBar = () => {
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
          <div key={index} className="col-sm-12">
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
