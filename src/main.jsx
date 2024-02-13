import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SingleNotes from "./SingleNotes.jsx";
import AllNotes from "./AllNotes.jsx";
import AddNotes from "./AddNotes.jsx";
import LoginPage from "./LoginPage.jsx";
import ContextHook from "./ContextHook.jsx";
import AuthLayout from "./AuthLayout.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <AuthLayout auth={false}>
            <LoginPage />
          </AuthLayout>
        ),
      },
      {
        path: "/home",
        element: (
          <AuthLayout auth={true}>
            <AllNotes />
          </AuthLayout>
        ),
      },
      {
        path: "/addnotes",
        element: (
          <AuthLayout auth={true}>
            <AddNotes />
          </AuthLayout>
        ),
      },
      {
        path: "/notes/:id",
        element: (
          <AuthLayout auth={true}>
            <SingleNotes />
          </AuthLayout>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextHook>
      <RouterProvider router={route} />
    </ContextHook>
  </React.StrictMode>
);
