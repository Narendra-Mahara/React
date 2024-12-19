import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setuser } = useContext(UserContext);
  return (
    <div className="">
      <h1>Login</h1>
      <input
        placeholder="Username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        type="text"
        name=""
        id=" "
      />
      <input
        value={password}
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="password"
        name=""
        id=""
      />
      <button
        onClick={() => {
          setuser({ username, password });
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
