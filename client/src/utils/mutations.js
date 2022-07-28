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

export const SAVE_BOOK = gql`
  mutation Mutation(
    $userId: ID!
    $bookId: String
    $authors: [String]
    $title: String
    $description: String
    $image: String
  ) {
    saveBook(
      userId: $userId
      bookId: $bookId
      authors: $authors
      title: $title
      description: $description
      image: $image
    ) {
      _id
      username
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation Mutation($userId: ID!, $bookId: String) {
    deleteBook(userId: $userId, bookId: $bookId) {
      _id
      username
      savedBooks {
        bookId
      }
    }
  }
`;
