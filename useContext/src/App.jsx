import React from "react";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./component/Login";
import Profile from "./component/Profile";
const App = () => {
  return (
    <UserContextProvider>
      {/* {components haru jo use garxan values haru} */}
      <Login />
      <Profile />
    </UserContextProvider>
  );
};

export default App;
