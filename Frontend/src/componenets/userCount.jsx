import { useContext } from "react";
import { UserContext } from "../context/UserContext";
export const UserCount = () => {
    const user = useContext(UserContext);
    return <h3>Total user :{user.length}</h3>
}