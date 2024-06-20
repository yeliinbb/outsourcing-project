import UserAPI from './UserApi';
import YoutubeAPI from './YoutubeApi';

class API {
  constructor() {
    this.youtube = new YoutubeAPI();
    this.user = new UserAPI();
  }
}

const api = new API();
console.log('api', api);
export default api;
