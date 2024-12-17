import React, { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  //   const [data, setData] = useState({});
  //   const url = "https://api.github.com/users/narendra-mahara";
  //   useEffect(() => {
  //     fetch(url)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setData(data);
  //       });
  //   }, []);

  const data = useLoaderData();
  return (
    <div className="text-3xl text-center bg-gray-700 text-white">
      <h1>User Name: {data.name}</h1>
      <div className="flex justify-center">
        <img src={data.avatar_url} alt="profile-picture" width={300} />
      </div>
    </div>
  );
}

export default Github;

export const fetchGithub = async () => {
  const response = await fetch("https://api.github.com/users/narendra-mahara");
  const data = await response.json();
  return data;
};
