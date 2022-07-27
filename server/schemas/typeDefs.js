const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
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
      authors: [String]
      description: String!
      title: String!
      bookId: String!
      image: String
      link: String
    ): User
    deleteBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
