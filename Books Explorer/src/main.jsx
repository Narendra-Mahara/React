import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home";
import Layout from "./Layout";
let searchValue = "React";
let url = `https://www.googleapis.com/books/v1/volumes?q=${searchValue}&fields=items(volumeInfo(title,description,imageLinks/thumbnail))
`;
const fetchBooksData = async () => {
  let response = await fetch(url);
  let data = await response.json();
  return data;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        {/* <Route path="/books" element={<Books />} loader={fetchBooksData} /> */}
      </Route>
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
