import { gql, useQuery } from "@apollo/client";

const GET_USERS = gql`
  query {
    users {
      userName
    }
  }
`;

function Users() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <ul>
      {data.users.map(({ userName }) => (
        <li key={userName}>{userName}</li>
      ))}
    </ul>
  );
}
export default Users;
