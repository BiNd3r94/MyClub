import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import "primereact/resources/themes/lara-dark-teal/theme.css";
import "primereact/resources/primereact.min.css";
import './App.css';
import Home from "./views/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
  ]);
  return (
      <div className="my-club">
        <h1 className={"text-center"}>My Club</h1>

        <RouterProvider router={router}/>
      </div>
  );
}

export default App;
