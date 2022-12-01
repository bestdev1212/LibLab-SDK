# @joshuajc/ringapi SDK implementation mechanism

I used JS/TS method chaining with class to simplify calls of various methods.

```
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

....

}
```

Each function in this class return self class, So we can chaining each member function call.

```
import RingAPI from '@joshuajc/ringapi'

const books = RingAPI.setSorting('asc').getBooks();

```

#### Note

Function for getting data(getBooks(), getMovie, ...) should be placed in final order of chaining.

#### Test

npm run test
