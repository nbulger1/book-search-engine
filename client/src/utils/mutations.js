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
  mutation Mutation($userId: ID!, $title: String!, $description: String!) {
    updateBook(userId: $userId, title: $title, description: $description) {
      _id
      username
      savedBooks {
        _id
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation deleteBook($userId: ID!, $bookId: ID!) {
    deleteBook(userId: $userId, bookId: $bookId) {
      _id
      username
      savedBooks {
        _id
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;
