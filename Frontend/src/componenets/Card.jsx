import React, { useContext } from "react";
import { UserContext } from "../context/UserContext"; // ✅ import context
import "./Card.css";

export const Card = () => {
    // consumer ke andar consumer ko dalo
  const userData = useContext(UserContext); // ✅ get data from context

  return (
    <div className="card-wrapper">
      <h1 className="heading">User Cards = {userData.length}</h1>
      <div className="card-grid">
        {userData.map((user, index) => (
          <div className="card" key={index}>
            <h2>Name: {user.name}</h2>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
            <p>City: {user.city}</p>
            <p>Phone: {user.phone_no}</p>
            <p>Company: {user.company_Name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
