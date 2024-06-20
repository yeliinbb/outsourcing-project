import UserAPI from './UserApi';
import YoutubeAPI from './youtubeApi';

class API {
  constructor() {
    this.youtube = new YoutubeAPI();
    this.user = new UserAPI();
  }
}

const api = new API();
export default api;
