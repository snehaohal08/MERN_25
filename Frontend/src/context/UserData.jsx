// context/UserData.jsx
import { createContext, useState } from "react";

export const UserDataContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState([
    {
      id: 1,
      name: "Sneha Ohal",
      email: "snehaohal@gmail.com",
      phone_no: "9604064897"
    }
  ]);

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};
