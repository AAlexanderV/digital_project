import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import Main from "./components/Main";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
  },
  // {
  //   path: "/gallery/",
  //   element: <Gallery />,
  // },
  // {
  //   path: "/projects/",
  //   element: <Projects />,
  // },
  // {
  //   path: "/certificates/",
  //   element: <Certificates />,
  // },
  // {
  //   path: "/contacts/",
  //   element: <Contacts />,
  // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
