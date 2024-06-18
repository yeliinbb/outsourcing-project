import YoutubeAPI from './YoutubeApi';

class API {
  constructor() {
    this.youtube = new YoutubeAPI();
  }
}

const api = new API();
export default api;
