import { useQuery, gql } from "@apollo/client";

const GET_USERS = gql`
  query GET_USERS {
    users {
      currentPage
      pageSize
      totalCount
      hasNextPage
      hasPreviousPage
      users {
        userName
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;

  if (error) {
    console.error("GraphQL Error:", error); 
    return <p>Error: {error.message}</p>;
  }

  if (!data || !data.users) {
    return <p>No data available</p>;
  }

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {data.users.users.map((user, index) => (
          <li key={index}>{user.userName}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
