import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MantineProvider } from "@mantine/core"; // ✅ Required for Mantine to work
import { Notifications } from "@mantine/notifications";
import { UserProvider } from "./context/UserData";
import User from "./componenets/User/user";
import Table from "./componenets/Table/Table";
import { UserCount } from "./componenets/userCount";
import { Card } from "./componenets/card";

function App() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        fontFamily: "Poppins, sans-serif",
        primaryColor: "blue",
      }}
    >
      <UserProvider>
        <BrowserRouter>
          {/* ✅ Notifications must go inside here */}
          <Notifications position="bottom-left" />

          <Routes>
            <Route path="/" element={<User />} />
            <Route path="/usercount" element={<UserCount />} />
            <Route path="/card" element={<Card />} />
            <Route path="/table" element={<Table />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </MantineProvider>
  );
}

export default App;
