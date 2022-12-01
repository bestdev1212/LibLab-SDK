import RingAPI from "../index";
// import RingAPI from "@joshuajc/ringapi";
import * as dotenv from "dotenv";
dotenv.config();

const token = process.env.api_key || "";

describe("test ring apis", () => {
  test("get books", async () => {
    const books = await RingAPI().getBooks();
    expect(books.length).toBeGreaterThan(0);
  });

  test("get movies", async () => {
    const movies = await RingAPI().setAccessToken(token).getMovies();
    expect(movies.length).toBeGreaterThan(0);
  });

  test("sorting and pagination", async () => {
    const movies = await RingAPI().setAccessToken(token).setSorting("name", "asc").setPaginationLimit(10).getMovies();
    expect(movies.length).toBeGreaterThan(0);
  });
});
