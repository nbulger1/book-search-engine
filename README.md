## Book Search Engine - Week 21 Homework

## Description

I was tasked to take starter code with a fully functioning Google Books API search engine built with a RESTful API, and refactor it to be a GraphQL API built with Apollo Server. The pre-existing applicatioon was built using the MERN stack (ReactJS front end, MongoDB databse, and Express.js/Node.js server/API).

To complete the assignment, I completed the following:

1. Set up an Apollo Server to use GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API.

2. Modify the existing authentication middleware so that it works in the context of a GraphQL API.

3. Create an Apollo Provider so that requests can communicate with an Apollo Server.

4. Deploy your application to Heroku with a MongoDB database using MongoDB Atlas.

## Table of Contents

- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Server](#server)
- [Client](#client)
- [License](#license)
- [Link](#link)

## User Story

```md
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase
```

## Acceptance Criteria

```md
GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
```

## Server

To adjust the server side, I needed to adjust the models, controllers, server.js, and the auth.js within the utils file.

### Models

I started by looking at the existing data models within the `models` folder. Using those as a reference I created a `schemas` folder with a `typeDefs.js` file. To fill in the `typeDefs.js` file I used the models to create the `Book` and `User` types. Then I created the `Auth` type to hold the token from `javascript web token` when logged in. I also made `Query` and `Mutation` types to hold the possible queries and mutations that were controlled through the `resolvers`.

### Controllers

To create the `resolvers.js` file within the `schemas` folder I used the user-controllers from the RESTful API as a guide. Each resolver was reflected in the `typeDefs.js` file. The following are possible `resolvers`:

- users - queries all users
- user - queries an individual user by ID
- me - queries the user's id that is logged in based on the authMiddleware context designated in the server file
- addUser - creates a new user based on their username, email, and password
- login - logs in a user by finding their email, confirming the password and creating a token
- updateBook - saves a book to a User's file by taking in the user's ID as well as the book's information (bookId, authors, title, description, image, and/or link)
- deleteBook - deletes a book by updated the user to remove the book by bookId
- removeUser - finals a user by ID and deletes them

### server.js

The server.js file was rewritten to invlude the `ApolloServer` from `apollo-server-express` as well as the newly created typeDefs and resolves from the schemas folder. The `server` was defined by creating a new ApolloServer including typeDefs, resolvers, and context: authMiddleware. Finally, I defined an asynchronous function to start the ApolloServer, await the server.start, apply the middleware from the express app, and open the graphQL database.

### auth.js

The `auth.js` file was updated to work with a graphQL server by destructing the `req` within the function inputs, adding in `req.body.token` to the token options, and returning `req` instead of calling the next function.

## Client

The client side was adjusted by changing the both `pages` as well as the `login` and `signup` components, adding in `mutations` and `queries` to the utils folder and adding an Apollo Provider to `App.js`.

### Mutations & Queries

The mutations and queries were created based on the `resolvers` file on the server side to make the appropriate calls to the database. They were formatted by using the Apollo server sandbox to test out the database and copying those commands into the appropriate file.

### Pages & Components

The `login`, `signup`, `savedBooks`, and `searchBooks` components were adjusted to query or mutate using the graphQL database by including the appropriate queries/mutations, defining them using the `{useQuery, useMutation }` from `@apollo/client`, and calling them as functions. In order to obtain the `userId` to pass through the mutations I used the `QUERY_ME` query to get the current user's information.

### App.js

Finally I adjusted the `App.js` file by creating a uri when using the createHttpLink, set the context by grabbing the token from localStorage, and defined a client with a link and cache.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project is protected under the MIT License.

## Link

See the following for a link to the deployed application: https://book-search-engine-nbulger.herokuapp.com
