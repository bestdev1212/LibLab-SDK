# @joshuajc/ringapi SDK

## About


The @joshuajc/ringapi Node SDK allows you to quickly and easily integrate Lord of Ring Api effortlessly.

Rest API Documentation can be found on this [url](https://the-one-api.dev/documentation).

You have to signup on this platform to get accesskey.

#### Note

This Readme provide basic installation and usage information.

## Installation


> npm install @joshuajc/ringapi

## Usage


You can use this library based on JS/TS method chaining.

```
// get book list
import RingAPI from '@joshuajc/ringapi';

const books = await RingAPI.getBooks();

//output will be json array containing books data

```

You can insert filtering, sorting, pagination before getting specific data.

```
import RingAPI from '@joshuajc/ringapi';

const books = await RingAPI.setSorting('asc').getBooks() // set ascending order

const books = await RingAPI.setPaginationPage(2).getBooks() // set 2nd page and get result

// You can combine multile function calls by chaining

const books = await RingAPI.setPaginationOffset(12).setSorting('desc').getBooks() // set both of page offset and sorting

// You should set auth token before calling sensitve datas

const acccessTokenString = "abcdddssdf1s"; // you should replace this with real token

const movieId = 'a34d43"

const movie = await RingAPI.setAccessToken(tokenString).setPaginationPage(1).setSorting('asc').getMovie(movieId);


```
