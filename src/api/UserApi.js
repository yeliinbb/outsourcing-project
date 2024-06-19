import supabase from '../supabase/supabaseClient';

class UserAPI {
  #client;

  constructor() {
    this.#client = supabase;
  }

  async signIn() {
    const { data } = await this.#client.auth.signInWithOAuth({
      provider: 'github',
    });

    return data;
  }

  async signOut() {
    await this.#client.auth.signOut();
  }

  // async getSession() {
  //   const {
  //     data: { session },
  //     error,
  //   } = await this.#client.auth.getSession();
  //   if (error) {
  //     console.error(error);
  //   }

  //   return session.access_token;
  // }

  // async getUser() {
  //   const {
  //     data: { user },
  //   } = await this.#client.auth.getUser();
  //   return user;
  // }
}

export default UserAPI;
