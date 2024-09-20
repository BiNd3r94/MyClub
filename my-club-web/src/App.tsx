import React, {useEffect, useState} from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import "primereact/resources/themes/vela-green/theme.css";
import "primereact/resources/primereact.min.css";
import './App.css';
import {routes} from "./routes/routes";
import {useAuth} from "react-oidc-context";
import {Button} from "primereact/button";

const headers = {headers: {"Authorization": "Basic YWRtaW46YWRtaW4="}};

function App() {
  const auth = useAuth();
  const [userData, setUserData] = useState(null);
  const router = createBrowserRouter(routes);

  useEffect(() => {
    console.log(auth.error)
  }, [auth.error]);

  return (
      <div className="my-club">
        <div className="container p-3">
          <h1 className={"text-center"}>My Club</h1>
          <p>Willkommen {userData ? userData.username : ""}</p>
        </div>
        {auth.error &&
            <div>something went wrong</div>
        }
        {auth.isAuthenticated && <RouterProvider router={router}/>}
        {!auth.isAuthenticated && <Button onClick={() => void auth.signinRedirect()}>Login</Button>}
      </div>
  );
}

export default App;
