import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import "primereact/resources/themes/vela-green/theme.css";
import "primereact/resources/primereact.min.css";
import {routes} from "./routes/routes";
import {KeycloakProvider} from "./auth/KeycloakProvider";
import './App.css';
import "./i18n";

const headers = {headers: {"Authorization": "Basic YWRtaW46YWRtaW4="}};

function App() {
    const router = createBrowserRouter(routes);

    return (
        <KeycloakProvider>
            <div className="my-club">
                <div className="container p-3">
                    <a href='/'>
                        <h1 className={"text-center"}>My Club</h1>
                    </a>
                </div>
                <div className="main flex justify-content-center flex-column">
                    <RouterProvider router={router}/>
                </div>
            </div>
        </KeycloakProvider>
    );
}

export default App;
