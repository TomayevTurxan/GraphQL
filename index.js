import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// Sample user data
const userData = {
  currentPage: 1,
  pageSize: 10,
  totalCount: 1,
  hasNextPage: false,
  hasPreviousPage: false,
  users: [
    {
      userId: "0",
      userName: "aa",
    },
    {
      userId: "1",
      userName: "bb",
    },
    {
      userId: "2",
      userName: "cc",
    },
    {
      userId: "3",
      userName: "dd",
    },
    {
      userId: "4",
      userName: "ee",
    },
    {
      userId: "5",
      userName: "ff",
    },
  ],
};

// GraphQL type definitions
const typeDefs = `#graphql
  type Department {
    departmentId: String!
    departmentName: String!
  }

  type Position {
    positionId: String!
    positionName: String!
  }

  type Line {
    lineId: String!
    lineName: String!
  }

  type Module {
    moduleId: String!
    moduleName: String!
  }

  type Shift {
    shiftId: String!
    shiftName: String!
  }

  type Organization {
    organizationId: String!
    organizationName: String!
  }

  type User {
    userId: String!
    userName: String!
    firstName: String!
    lastName: String!
    userImg: String
    phoneNumber: String!
    email: String!
    department: Department
    position: Position
    line: Line
    module: Module
    shift: Shift
    organization: Organization
    isDeleted: Boolean!
  }

  type UserPagination {
    currentPage: Int!
    pageSize: Int!
    totalCount: Int!
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
    users: [User!]!
  }

  type Query {
    users: UserPagination!
  }

  input UserInput {
    userName: String!
    firstName: String!
    lastName: String!
    userImg: String
    phoneNumber: String!
    email: String!
    departmentId: String
    positionId: String
    lineId: String
    moduleId: String
    shiftId: String
    organizationId: String
  }

  type Mutation {
    addUser(input: UserInput!): User!
  }
`;

// GraphQL resolvers
const resolvers = {
  Query: {
    users: () => {
      console.log("Users data:", userData);
      return {
        currentPage: userData.currentPage,
        pageSize: userData.pageSize,
        totalCount: userData.totalCount,
        hasNextPage: userData.hasNextPage,
        hasPreviousPage: userData.hasPreviousPage,
        users: userData.users,
      };
    },
  },
};

// Create an instance of ApolloServer
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Start the server
const { url } = await startStandaloneServer(server, {
  listen: { port: 4001 },
});

console.log(`🚀 Server ready at: ${url}`);
