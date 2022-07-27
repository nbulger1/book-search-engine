import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation Mutation($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        username
      }
    }
  }
`;

export const UPDATE_BOOK = gql`
  mutation Mutation($newBook: SavedBook!) {
    updateBook(newBook: $newBook) {
      username
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation UpdateBook($bookId: ID!) {
    deleteBook(bookId: $bookId) {
      username
    }
  }
`;
