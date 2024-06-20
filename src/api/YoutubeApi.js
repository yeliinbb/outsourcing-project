import axios from 'axios';

const youtubeKey = import.meta.env.VITE_YOUTUBE_KEY; 

class YoutubeAPI {
  #client;

  constructor() {
    this.#client = axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
    });
  }

  // 검색 기능 구현
  async search(keyword) {
    const response = await this.#client.get('/search', {
      params: {
        part: 'snippet',
        q: keyword,
        maxResults: 12,
        type: 'video',
        key: youtubeKey,
      },
      headers: {
        Accept: 'application/json',
      },
    });
    const data = response.data;
    return data.items;
  }

  // 채널에서 재생목록
  async fetchPlaylistItems(playlistId) {
    const response = await this.#client.get('/playlistItems', {
      params: {
        part: 'snippet,contentDetails',
        playlistId: playlistId,
        maxResults: 50,
        key: youtubeKey,
      },
      headers: {
        Accept: 'application/json',
      },
    });
    const data = response.data;
    return data;
  }

  // 비디오 id
  async fetchVideoDetails(videoIds) {
    const response = await this.#client.get('/videos', {
      params: {
        part: 'statistics',
        id: videoIds.join(','),
        key: youtubeKey,
      },
      headers: {
        Accept: 'application/json',
      },
    });
    const data = response.data;
    return data.items;
  }
}

export default YoutubeAPI;
