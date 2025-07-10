import React, { useContext } from "react";
import { UserDataContext } from "../../context/UserData";
import { Table as MantineTable, Group, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import "./Table.css";

const Table = () => {
  const { userData } = useContext(UserDataContext);
  const handleedit = (id) => {
    alert(window.confirm("Are you sure you want to edit this user?"));

  };

  const handledelte=(id)=>{
    alert(window.confirm("Are you sure you want to delete this user?"));
  }
  return (
    <div className="table-container">
      <Group justify="space-between">
        <Title order={2}>User List</Title>
        <Link to="/">
          <button class="btn1">Add User</button>
        </Link>
      </Group>

      <MantineTable striped highlightOnHover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone No</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone_no}</td>
              <td>
                <button
                  className="btn edit-btn"
                  onClick={() => handleedit(user.id)}
                >
                  Edit
                </button>
                <button
                  className="btn delete-btn"
                  onClick={() => handledelte(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </MantineTable>
    </div>
  );
};

export default Table;
