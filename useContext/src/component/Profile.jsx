import React, { useContext } from "react";
import UserContext from "../context/UserContext";
function Profile() {
  const { user } = useContext(UserContext);
  <div>Profile</div>;
//   !user ? <h1>Login please</h1> : <div>Welcome {user.username}</div>;
  if (!user) {
    return <div>Please Login</div>;
  }

  return <div>Welcome {user.username} </div>;
}

export default Profile;
