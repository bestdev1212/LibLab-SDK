// import fetch from "node-fetch";
// const fetch = require("node-fetch");
import axios from "axios";

type orderType = "asc" | "desc";

class Ring {
  url_prefix: string = "https://the-one-api.dev/v2/";
  access_token: string = "";
  url_suffix: string = "";

  /**
   * set access token for rest api calls
   * @param token
   * @returns
   */

  setAccessToken(token: string) {
    this.access_token = token;
    return this;
  }

  /**
   * set pagination limit number(default is 10)
   * @param limit
   * @returns
   */

  setPaginationLimit(limit: number) {
    this.url_suffix += `?limit=${limit}`;
    return this;
  }

  /**
   * set page number (default is 10)
   * @param page
   * @returns
   */

  setPaginationPage(page: number) {
    this.url_suffix += `?page=${page}`;
    return this;
  }

  /**
   * set page offset
   * @param offset
   * @returns
   */

  setPaginationOffset(offset: number) {
    this.url_suffix += `?offset=${offset}`;
    return this;
  }

  /**
   * set sorting mod ('asc' or 'desc)
   * @param item
   * @param order
   */
  setSorting(item: string, order: orderType) {
    this.url_suffix += `?sort=${item}:${order}`;
    return this;
  }

  /**
   * utility function for calling rest api
   * @param url
   * @returns
   */

  async fetchandReturn(url: string) {
    const response = await axios
      .get(url, {
        headers: { Authorization: `Bearer ${this.access_token}` },
      })
      .then((res: any) => {
        return res.data.docs;
      })

      .catch((error: any) => {
        return { error };
      });

    return response;
  }

  /**
   * List of all "The Lord of the Rings" books
   */
  getBooks() {
    const url = `${this.url_prefix}book${this.url_suffix}`;
    return this.fetchandReturn(url);
  }

  /**
   * Request one specific book
   * @param id
   */
  getBook(id: string) {
    const url = `${this.url_prefix}book/${id}${this.url_suffix}`;
    return this.fetchandReturn(url);
  }

  /**
   * Request all chapters of one specific book
   * @param id
   */

  getBookChapter(id: string) {
    const url = `${this.url_prefix}book/${id}/chapter${this.url_suffix}`;
    return this.fetchandReturn(url);
  }

  /**
   * List of all movies, including the "The Lord of the Rings" and the "The Hobbit" trilogies
   */
  getMovies() {
    const url = `${this.url_prefix}movie${this.url_suffix}`;
    return this.fetchandReturn(url);
  }

  /**
   * Request one specific movie
   * @param id
   */
  getMovie(id: string) {
    const url = `${this.url_prefix}movie/${id}${this.url_suffix}`;
    return this.fetchandReturn(url);
  }

  /**
   * Request all movie quotes for one specific movie (only working for the LotR trilogy)
   * @param id
   */
  getMovieQuote(id: string) {
    const url = `${this.url_prefix}movie/${id}/quote${this.url_suffix}`;
    return this.fetchandReturn(url);
  }

  /**
   * List of characters including metadata like name, gender, realm, race and more
   */
  getCharacters() {
    const url = `${this.url_prefix}character${this.url_suffix}`;
    return this.fetchandReturn(url);
  }

  /**
   * Request one specific character
   * @param id
   */

  getCharacter(id: string) {
    const url = `${this.url_prefix}character/${id}${this.url_suffix}`;
    return this.fetchandReturn(url);
  }

  /**
   * Request all movie quotes of one specific character
   * @param id
   */

  getCharacterQuote(id: string) {
    const url = `${this.url_prefix}character/${id}/quote${this.url_suffix}`;
    return this.fetchandReturn(url);
  }

  /**
   * List of all movie quotes
   */
  getQuotes() {
    const url = `${this.url_prefix}quote${this.url_suffix}`;
    return this.fetchandReturn(url);
  }

  /**
   * Request one specific movie quote
   * @param id
   */
  getQuote(id: string) {
    const url = `${this.url_prefix}quote/${id}${this.url_suffix}`;
    return this.fetchandReturn(url);
  }

  /**
   * List of all book chapters
   */
  getChapters() {
    const url = `${this.url_prefix}chapter${this.url_suffix}`;
    return this.fetchandReturn(url);
  }

  /**
   * Request one specific book chapter
   * @param id
   */
  getChapter(id: string) {
    const url = `${this.url_prefix}chapter/${id}${this.url_suffix}`;
    return this.fetchandReturn(url);
  }
}

const RingAPI = () => {
  return new Ring();
};
export default RingAPI;
