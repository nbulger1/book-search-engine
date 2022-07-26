const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    _id: ID!
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
  }

  type Query {
    user(userId: ID!): User
    users: [User]!
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): User
    login(email: String!, password: String!): User

    updateBook(userId: ID!, title: String!, description: String!): User
    removeUser: User
    deleteBook(userId: String!, bookId: String!): User
  }
`;

module.exports = typeDefs;
