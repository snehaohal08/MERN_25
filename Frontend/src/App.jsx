import { Card } from "./componenets/card";

import {BrowserRouter,Routes,Route} from "react-router-dom"
import User from "./componenets/User/user";
import { Notifications } from "@mantine/notifications"; 
import { UserCount } from "./componenets/userCount";
import { UserProvider } from "./context/UserData";
import Table from "./componenets/Table/Table";

function App() {
  return (
    <>
  <div style={{ position: "relative", minBlockSize:"100vh" }}>
    <Notifications position="top-right" zIndex={1000}/>
    <BrowserRouter>
    <UserProvider>
      <Routes>
        <Route path="/" element={<User/>}/>
        <Route path="/usercount" element={<UserCount/>}/>
        <Route path="/card" element={<Card/>}/>
        <Route path="/table" element={<Table/>}/>
      </Routes>
    </UserProvider>
    </BrowserRouter>

  </div>
 
    </>
  );
}

export default App;
