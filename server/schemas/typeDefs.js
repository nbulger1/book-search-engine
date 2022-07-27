const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    _id: ID
    bookId: String
    authors: [String]
    description: String
    image: String
    link: String
    title: String
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]
  }

  input SavedBook {
    bookId: String
    authors: [String]
    title: String
    description: String
    image: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user(userId: ID!): User
    users: [User]!
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    updateBook(
      userId: ID!
      bookId: String
      authors: [String]
      title: String
      description: String
      image: String
    ): User
    removeUser: User
    deleteBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
