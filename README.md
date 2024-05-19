# Personal-library-manager

A way to record and manage your personal library.

## How to run application

- Pull this repository down
- cd into server folder
- npm install packages
- `npm run start` to start server
im a different terminal:
- cd into client folder
- npm install packages
- `npm run start` to start client

### How to run tests

Currently there a couple of unit tests on the client side of the application. to run them:
- cd into client folder
- `npm run test`

## Routes

GET /books - get all the books
POST /books - create a new book
GET books/:id - get a single book page
PATCH: book/:id - edit a books details
DELETE: book/:id - delete a book

## Future features to work on

The following are ways the app can be improved:

[] Pagination
[] images to show up in thumbnail within individual book page
[] delete image from uploads folder when book is deleted
[] indication in book card of loan status
[] configure 404 response better (more consistently in backend and on individual pages on frontend)
[] component to indicate that there are no books in the library
