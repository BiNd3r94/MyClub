import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import "primereact/resources/themes/vela-green/theme.css";
import "primereact/resources/primereact.min.css";
import './App.css';
import {routes} from "./routes/routes";
import {KeycloakProvider} from "./KeycloakProvider";

const headers = {headers: {"Authorization": "Basic YWRtaW46YWRtaW4="}};

function App() {
  const router = createBrowserRouter(routes);

  return (
      <KeycloakProvider>
        <div className="my-club">
          <div className="container p-3">
            <h1 className={"text-center"}>My Club</h1>
          </div>
          <RouterProvider router={router}/>
        </div>
      </KeycloakProvider>
  );
}

export default App;
