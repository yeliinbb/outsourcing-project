import { Link } from 'react-router-dom';
import logoHB from '../../assets/hb-logo.png';
import IconGithub from '../../assets/icons/github.svg';
import MatchCard from '../../components/MainPageComponent/MatchCard';
import RankCard from '../../components/MainPageComponent/RankCard';
import SearchInput from '../../components/MainPageComponent/SearchInput';
import VideoComp from '../../components/MainPageComponent/VideoComp';
import WeatherByGame from '../../components/MainPageComponent/WeatherByGame';
import YouTuberList from '../../components/MainPageComponent/YouTuberList';
import SignInButton from '../../components/SignInButton';
import SignOutButton from '../../components/SignOutButton';
import { useSession } from '../../useLoginStore';

const MainPage = () => {
  const tags = ['안치홍', '안치홍', '안치홍', '안치홍', '안치홍'];
  const playlistId = 'PLuY-NTS_5IpzwH3FfskfFOrnui5O5NlkC';
  const session = useSession();

  return (
    <div className="flex h-screen">
      <div className="w-1/4 h-full flex flex-col justify-center">
        <img src={logoHB} className="ml-5 mt-5" />
        <div className="w-full h-72 flex items-center justify-center">
          <MatchCard />
        </div>
        <div className="flex-1 pr-5">
          <RankCard />
        </div>
      </div>
      <div className="w-3/4 h-full flex flex-col">
        <div className="flex items-end justify-between">
          <SearchInput className="mb-5" />
          <span className="flex flex-row gap-5 items-center">
            {session.isLoggedIn ? <SignOutButton /> : <SignInButton />}
            <Link
              to="https://github.com/FEsunmin/outsourcing-project"
              target="_blank"
            >
              <img src={IconGithub} className="pr-8" />
            </Link>
          </span>
        </div>
        <div className="h-[100%] overflow-hidden">
          <div className="h-[60%]  rounded-2xl ">
            <VideoComp playlistId={playlistId} />
          </div>
          <div className="flex h-[40%] mt-5">
            <WeatherByGame />
            <YouTuberList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
