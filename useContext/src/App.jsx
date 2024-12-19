import React,{useState} from "react";
import Login from "./component/Login";
import Profile from "./component/Profile";
import UserContext from "./context/UserContext";
const App = () => {
    const [user, setuser] = useState("");
  return (
    <UserContext.Provider value={{ user, setuser }}>
      <Login />
      <Profile />
    </UserContext.Provider>
  );
};

export default App;
