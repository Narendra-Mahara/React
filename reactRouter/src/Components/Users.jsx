import React from "react";
import { useParams } from "react-router-dom";

const Users = () => {
  const {name} = useParams();
  return (
    <div>
      <h1 className="text-3xl text-center bg-orange-700 text-white">Hello i am {name}</h1>
    </div>
  );
};

export default Users;
