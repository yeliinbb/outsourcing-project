import axios from 'axios';

class YoutubeAPI {
  #client;

  constructor() {
    this.#client = axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
    });
  }

  async search(keyword) {
    return [];
  }
}

export default YoutubeAPI;
