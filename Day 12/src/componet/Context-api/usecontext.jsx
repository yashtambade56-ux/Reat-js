import { UserContext } from "react";
import { UserContext } from "./componet/Context-api/Context.jsx";

function Dashboard() {
    const user = useContext(UserContext);

    return <h2>Welcome, {user.name}!</h2>;

}