import supabase from '../supabase/supabaseClient';
import GameAPI from './GameApi';
import UserAPI from './UserApi';
import YoutubeAPI from './YoutubeApi';

class API {
  constructor() {
    this.youtube = new YoutubeAPI();
    this.user = new UserAPI(supabase);
    this.game = new GameAPI(supabase);
  }
}

const api = new API();
export default api;
