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

  input InputBook {
    bookId: String
    authors: [String]
    title: String
    description: String
    image: String
    link: String
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

    updateBook(newBook: InputBook!): User
    removeUser: User
    deleteBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
