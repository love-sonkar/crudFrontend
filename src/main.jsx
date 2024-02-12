import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SingleNotes from "./SingleNotes.jsx";
import AllNotes from "./AllNotes.jsx";
import AddNotes from "./AddNotes.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <AllNotes /> },
      { path: "/addnotes", element: <AddNotes /> },
      {
        path: "/notes/:id",
        element: <SingleNotes />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);