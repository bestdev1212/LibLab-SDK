type orderType = "asc" | "desc";
declare class Ring {
    url_prefix: string;
    access_token: string;
    url_suffix: string;
    /**
     * set access token for rest api calls
     * @param token
     * @returns
     */
    setAccessToken(token: string): this;
    /**
     * set pagination limit number(default is 10)
     * @param limit
     * @returns
     */
    setPaginationLimit(limit: number): this;
    /**
     * set page number (default is 10)
     * @param page
     * @returns
     */
    setPaginationPage(page: number): this;
    /**
     * set page offset
     * @param offset
     * @returns
     */
    setPaginationOffset(offset: number): this;
    /**
     * set sorting mod ('asc' or 'desc)
     * @param item
     * @param order
     */
    setSorting(item: string, order: orderType): this;
    /**
     * utility function for calling rest api
     * @param url
     * @returns
     */
    fetchandReturn(url: string): Promise<any>;
    /**
     * List of all "The Lord of the Rings" books
     */
    getBooks(): Promise<any>;
    /**
     * Request one specific book
     * @param id
     */
    getBook(id: string): Promise<any>;
    /**
     * Request all chapters of one specific book
     * @param id
     */
    getBookChapter(id: string): Promise<any>;
    /**
     * List of all movies, including the "The Lord of the Rings" and the "The Hobbit" trilogies
     */
    getMovies(): Promise<any>;
    /**
     * Request one specific movie
     * @param id
     */
    getMovie(id: string): Promise<any>;
    /**
     * Request all movie quotes for one specific movie (only working for the LotR trilogy)
     * @param id
     */
    getMovieQuote(id: string): Promise<any>;
    /**
     * List of characters including metadata like name, gender, realm, race and more
     */
    getCharacters(): Promise<any>;
    /**
     * Request one specific character
     * @param id
     */
    getCharacter(id: string): Promise<any>;
    /**
     * Request all movie quotes of one specific character
     * @param id
     */
    getCharacterQuote(id: string): Promise<any>;
    /**
     * List of all movie quotes
     */
    getQuotes(): Promise<any>;
    /**
     * Request one specific movie quote
     * @param id
     */
    getQuote(id: string): Promise<any>;
    /**
     * List of all book chapters
     */
    getChapters(): Promise<any>;
    /**
     * Request one specific book chapter
     * @param id
     */
    getChapter(id: string): Promise<any>;
}
declare const RingAPI: () => Ring;
export default RingAPI;
