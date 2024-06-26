import cbo5penr from '../../assets/images/cbo5penr.jpeg';
import hongpro from '../../assets/images/hongpro.jpeg';
import keystoneplay from '../../assets/images/keystoneplay.jpeg';

const youtuberList = [
  {
    number: 1,
    name: '홍프로',
    img: hongpro,
    link: 'https://www.youtube.com/@HongproSports',
  },
  {
    number: 2,
    name: '크보5프너',
    img: cbo5penr,
    link: 'https://www.youtube.com/@kboopener',
  },
  {
    number: 3,
    name: '키스톤플레이',
    img: keystoneplay,
    link: 'https://www.youtube.com/@keystone-play',
  },
  // {
  //  number : 1,
  //   name: '노마TV',
  //   img: nomaTV,
  // },
];

const YouTuberList = () => {
  return (
    <div className="w-[30%] h-[77%] ml-5 mr-5 bg-darkgray rounded-2xl">
      <ul>
        <h1 className="text-white mt-3 text-center font-semibold">
          추천 유튜버
        </h1>
        {youtuberList.map((youtuber, i) => (
          <div key={i} className="flex items-center">
            <h1 className="text-lg font-semibold ml-5 mt-2 text-white">
              {youtuber.number}
            </h1>
            <a href={youtuber.link} className="flex items-center">
              <img
                src={youtuber.img}
                className="w-12 h-12 rounded-full mt-2 ml-5"
              />
              <li className="mt-2 ml-5 text-white">{youtuber.name}</li>
            </a>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default YouTuberList;
