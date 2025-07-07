import React, { useEffect, useState } from "react";
import "./Card.css";

export const Card = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/user")
      .then((res) => res.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="card-wrapper">
      <h1 className="heading">User Cards</h1>
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
