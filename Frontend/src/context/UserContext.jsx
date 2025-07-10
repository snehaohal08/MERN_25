// createcontext,provider then consumer 

import { createContext, useState, useEffect } from "react";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/user")
      .then((res) => res.json())
      .then((data) => setUserData(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
// wrap the all child inside provider
    <UserContext.Provider value={userData}>
      {children}
    </UserContext.Provider>
  );
};
