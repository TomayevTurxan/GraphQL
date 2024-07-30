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
  const [currentPage, setCurrentPage] = useState();
  const [filterdData, setFilterdData] = useState([]);
  const pageSize = 3;

  if (loading) return <p>Loading...</p>;

  if (error) {
    console.error("GraphQL Error:", error);
    return <p>Error: {error.message}</p>;
  }

  if (!data || !data.users) {
    return <p>No data available</p>;
  }

  const userData = filterdData.length > 0 ? filterdData : data.users.users;
  console.log("userData", userData);
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
    if (filters.userName) {
      const filtersData = data.users.users.filter((user) =>
        user.userName.includes(filters.userName[0])
      );
      console.log("filtersData", filtersData);
      setFilterdData(filtersData);
    } else {
      setFilterdData([]);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log("page", page);
  };

  return (
    <div>
      <h1>Users</h1>
      <Table
        columns={columns}
        dataSource={userData}
        onChange={onChange}
        pagination={{
          onChange: handlePageChange,
          current: currentPage,
          pageSize: pageSize,
        }}
      />
    </div>
  );
}

export default App;
