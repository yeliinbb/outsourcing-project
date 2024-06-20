class GameAPI {
  #client;
  constructor(client) {
    this.#client = client;
  }

  async getRecentResults() {
    const { data: gameSchedules, error } = await this.#client
      .from('recentGameResult')
      .select();
    if (error) {
      throw error;
    }
    return gameSchedules;
  }
}

export default GameAPI;
