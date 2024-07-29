import { useQuery, gql } from "@apollo/client";
import { Table } from "antd";
import { useState } from "react";

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
        firstName
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_USERS);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;

  if (loading) return <p>Loading...</p>;

  if (error) {
    console.error("GraphQL Error:", error);
    return <p>Error: {error.message}</p>;
  }

  if (!data || !data.users) {
    return <p>No data available</p>;
  }

  // Calculate the paginated data
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = currentPage * pageSize;
  const paginatedData = data.users.users.slice(startIndex, endIndex);

  // Format filters for the column
  const names = data.users.users.map((user) => user.userName);
  const filters = names.map((name) => ({
    text: name,
    value: name,
  }));

  const columns = [
    {
      title: "User Name",
      dataIndex: "userName",
      key: "userName",
      sorter: (a, b) => a.userName.localeCompare(b.userName),
      filters: filters,
      onFilter: (value, record) => record.userName.indexOf(value) === 0,
    },
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
      sorter: (a, b) => a.firstName.localeCompare(b.firstName),
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h1>Users</h1>
      <Table
        columns={columns}
        dataSource={paginatedData}
        onChange={onChange}
        pagination={{
          current: currentPage,
          pageSize: pageSize,
          total: data.users.totalCount,
          onChange: handlePageChange,
        }}
      />
    </div>
  );
}

export default App;
