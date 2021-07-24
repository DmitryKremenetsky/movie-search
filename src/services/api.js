class ApiService {
  API_KEY = "35def29d";
  API_URL = `http://www.omdbapi.com/?apikey=${this.API_KEY}`;

  async searchMovies(searchQuery) {
    try {
      const response = await fetch(`${this.API_URL}&s=${searchQuery}`);
      const { Search: moviesList } = await response.json();
      return moviesList;
    } catch (error) {
      console.log(`[ApiService]: ${error}`);
    }
  }
}

export default new ApiService();
