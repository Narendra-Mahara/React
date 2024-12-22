import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
const Card = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        setData(response.data);
        console.log(response.status); // show the status code
        console.log(response.statusText); // show the status text of the response
        console.log(response.headers); // show the headers of the response
        console.log(response.config); // show the config of the response
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response.status); // show the status code
        console.log(error.response.statusText); // show the status text of the response
        console.log(error.response.headers); // show the headers of the response
        console.log(error.response.config); // show the config of the response
      });
  });

  // using async and await
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://jsonplaceholder.typicode.com/photos"
  //       );
  //       setData(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      <div className="flex flex-wrap">
        {data.map((pic) => {
          return (
            <div key={pic.id} className="w-1/4 p-4 text-xl">
              <h3>{pic.title}</h3>
              <img src={pic.thumbnailUrl} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
