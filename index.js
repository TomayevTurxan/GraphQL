import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// Sample user data
const userData = {
  currentPage: 1,
  pageSize: 5,
  totalCount: 10,
  hasNextPage: false,
  hasPreviousPage: false,
  users: [
    {
      userId: "10319d3a-b7f0-417e-b617-170399915cb1",
      userName: "fewfewfewf",
      firstName: "ewfwefewfwef",
      lastName: "wefewfewfewfewf",
      userImg: "resources/users_image/9af18b66-5529-4f4b-91c1-25e588c0f27a.png",
      phoneNumber: "+994554444444",
      email: "asjasasas@gmail.com",
      department: {
        departmentId: "f1354c4e-d4f7-461c-b302-13e6557a4ad9",
        departmentName: "Default",
      },
      position: {
        positionId: "59061f5e-94a7-4154-a84c-c57749cfee2b",
        positionName: "Default",
      },
      line: {
        lineId: "6ea10eb0-4b88-4eb6-97bc-d93e1afb551c",
        lineName: "Default",
      },
      module: {
        moduleId: "d6fae3e5-ce0f-478c-b991-a4556c645bcb",
        moduleName: "Default",
      },
      shift: {
        shiftId: "c6ad60ff-a398-49eb-8ba1-ae3c0d202116",
        shiftName: "Default",
      },
      organization: {
        organizationId: "b7f07905-67e6-4478-a03c-0bdba011d652",
        organizationName: "Default",
      },
      isDeleted: false,
    },
    {
      userId: "1f39e74e-658e-463e-bbe0-b8cd61f13d22",
      userName: "Administratorwqd",
      firstName: "wqdwqwqdqw",
      lastName: "qwdwqdqdq",
      userImg: "resources/users_image/acb0d8c6-42fb-4818-862a-62f28553d737.jpg",
      phoneNumber: "+994554444444",
      email: "asjasasas@gmail.com",
      department: {
        departmentId: "f1354c4e-d4f7-461c-b302-13e6557a4ad9",
        departmentName: "Default",
      },
      position: {
        positionId: "59061f5e-94a7-4154-a84c-c57749cfee2b",
        positionName: "Default",
      },
      line: {
        lineId: "6ea10eb0-4b88-4eb6-97bc-d93e1afb551c",
        lineName: "Default",
      },
      module: {
        moduleId: "d6fae3e5-ce0f-478c-b991-a4556c645bcb",
        moduleName: "Default",
      },
      shift: {
        shiftId: "c6ad60ff-a398-49eb-8ba1-ae3c0d202116",
        shiftName: "Default",
      },
      organization: {
        organizationId: "b7f07905-67e6-4478-a03c-0bdba011d652",
        organizationName: "Default",
      },
      isDeleted: false,
    },
    {
      userId: "b10597bd-1fe0-45aa-90b7-49adc942d94a",
      userName: "Administratorqwd",
      firstName: "qwdqwdqwdwq",
      lastName: "dqqwdqwdqqw",
      userImg: "resources/users_image/bb3364d1-7c0f-446a-a449-1aeba622b5cb.jpg",
      phoneNumber: "+994554444444",
      email: "asjasasas@gmail.com",
      department: {
        departmentId: "f1354c4e-d4f7-461c-b302-13e6557a4ad9",
        departmentName: "Default",
      },
      position: {
        positionId: "59061f5e-94a7-4154-a84c-c57749cfee2b",
        positionName: "Default",
      },
      line: {
        lineId: "6ea10eb0-4b88-4eb6-97bc-d93e1afb551c",
        lineName: "Default",
      },
      module: {
        moduleId: "d6fae3e5-ce0f-478c-b991-a4556c645bcb",
        moduleName: "Default",
      },
      shift: {
        shiftId: "c6ad60ff-a398-49eb-8ba1-ae3c0d202116",
        shiftName: "Default",
      },
      organization: {
        organizationId: "b7f07905-67e6-4478-a03c-0bdba011d652",
        organizationName: "Default",
      },
      isDeleted: false,
    },
    {
      userId: "727cc35d-4270-4c42-acc7-0f5c70e67b80",
      userName: "saaaaa",
      firstName: "aaaaa",
      lastName: "qwdqwasas",
      userImg: "resources/users_image/378037af-69e7-4bd1-b0b4-f3e2561baa77.jpg",
      phoneNumber: "+994554444444",
      email: "asjsacacasasas@gmail.com",
      department: {
        departmentId: "f1354c4e-d4f7-461c-b302-13e6557a4ad9",
        departmentName: "Default",
      },
      position: {
        positionId: "59061f5e-94a7-4154-a84c-c57749cfee2b",
        positionName: "Default",
      },
      line: {
        lineId: "6ea10eb0-4b88-4eb6-97bc-d93e1afb551c",
        lineName: "Default",
      },
      module: {
        moduleId: "d6fae3e5-ce0f-478c-b991-a4556c645bcb",
        moduleName: "Default",
      },
      shift: {
        shiftId: "c6ad60ff-a398-49eb-8ba1-ae3c0d202116",
        shiftName: "Default",
      },
      organization: {
        organizationId: "b7f07905-67e6-4478-a03c-0bdba011d652",
        organizationName: "Default",
      },
      isDeleted: false,
    },
    {
      userId: "df5d54e8-4c01-4e30-b76c-581840bf6e3c",
      userName: "wqdwq",
      firstName: "wqdwqdwq",
      lastName: "wqdwqqdqwdq",
      userImg: "resources/users_image/a3cdf6ad-8610-493a-b988-6e8c966c7805.jpg",
      phoneNumber: "+994554444444",
      email: "asjasasas@gmail.com",
      department: {
        departmentId: "f1354c4e-d4f7-461c-b302-13e6557a4ad9",
        departmentName: "Default",
      },
      position: {
        positionId: "59061f5e-94a7-4154-a84c-c57749cfee2b",
        positionName: "Default",
      },
      line: {
        lineId: "6ea10eb0-4b88-4eb6-97bc-d93e1afb551c",
        lineName: "Default",
      },
      module: {
        moduleId: "d6fae3e5-ce0f-478c-b991-a4556c645bcb",
        moduleName: "Default",
      },
      shift: {
        shiftId: "c6ad60ff-a398-49eb-8ba1-ae3c0d202116",
        shiftName: "Default",
      },
      organization: {
        organizationId: "b7f07905-67e6-4478-a03c-0bdba011d652",
        organizationName: "Default",
      },
      isDeleted: false,
    },
    {
      userId: "9d576981-314c-4186-be8d-1520cef8a44c",
      userName: "Turxan",
      firstName: "Turxan",
      lastName: "Turxan",
      userImg: "resources/users_image/4da48b45-af2f-4b98-b57f-5ac8bc0ac314.jpg",
      phoneNumber: "+994556093984",
      email: "turxantomayev05@gmail.com",
      department: {
        departmentId: "f1354c4e-d4f7-461c-b302-13e6557a4ad9",
        departmentName: "Default",
      },
      position: {
        positionId: "59061f5e-94a7-4154-a84c-c57749cfee2b",
        positionName: "Default",
      },
      line: {
        lineId: "6ea10eb0-4b88-4eb6-97bc-d93e1afb551c",
        lineName: "Default",
      },
      module: {
        moduleId: "d6fae3e5-ce0f-478c-b991-a4556c645bcb",
        moduleName: "Default",
      },
      shift: {
        shiftId: "c6ad60ff-a398-49eb-8ba1-ae3c0d202116",
        shiftName: "Default",
      },
      organization: {
        organizationId: "b7f07905-67e6-4478-a03c-0bdba011d652",
        organizationName: "Default",
      },
      isDeleted: false,
    },
    {
      userId: "e9980d6a-08d9-4ace-9bce-8935b00c9cdd",
      userName: "Administrator",
      firstName: "Administrator",
      lastName: "Administrator",
      userImg: "resources/users_image/e07f6c62-50b9-4993-b1e6-45a8c803ff82.png",
      phoneNumber: null,
      email: null,
      department: {
        departmentId: "f1354c4e-d4f7-461c-b302-13e6557a4ad9",
        departmentName: "Default",
      },
      position: {
        positionId: "59061f5e-94a7-4154-a84c-c57749cfee2b",
        positionName: "Default",
      },
      line: {
        lineId: "6ea10eb0-4b88-4eb6-97bc-d93e1afb551c",
        lineName: "Default",
      },
      module: {
        moduleId: "d6fae3e5-ce0f-478c-b991-a4556c645bcb",
        moduleName: "Default",
      },
      shift: {
        shiftId: "c6ad60ff-a398-49eb-8ba1-ae3c0d202116",
        shiftName: "Default",
      },
      organization: {
        organizationId: "b7f07905-67e6-4478-a03c-0bdba011d652",
        organizationName: "Default",
      },
      isDeleted: false,
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
