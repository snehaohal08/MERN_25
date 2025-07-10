import React, { useContext, useState } from "react"; 

import { UserDataContext } from "../../context/UserData";
import { Table as MantineTable, Group, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import "./Table.css";

const Table = () => {
  const { userData, setUserData } = useContext(UserDataContext);

 const handleedit = (id) => {
  const userToEdit = userData.find((user) => user.id === id);
  if (!userToEdit) return;

  const name = prompt("Enter new name", userToEdit.name);
  const email = prompt("Enter new email", userToEdit.email);
  const phone_no = prompt("Enter new phone", userToEdit.phone_no);

  if (name && email && phone_no) {
    const updatedUserData = userData.map((user) =>
      user.id === id ? { ...user, name, email, phone_no } : user
    );
    setUserData(updatedUserData);
    alert("User updated successfully!");
  }
};


const handledelte = (id) => {
  if (window.confirm("Are you sure you want to delete this user?")) {
    const updatedUserData = userData.filter((user) => user.id !== id);
    setUserData(updatedUserData);
    alert("User deleted successfully!");
  }
};




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
