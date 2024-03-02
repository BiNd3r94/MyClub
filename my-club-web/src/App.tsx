import React, {useEffect, useState} from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import "primereact/resources/themes/vela-green/theme.css";
import "primereact/resources/primereact.min.css";
import './App.css';
import Home from "./views/Home";

const headers = {headers: {"Authorization": "Basic YWRtaW46YWRtaW4="}};

function App() {
    const [userData, setUserData] = useState(null);

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home/>,
        },
    ]);

    useEffect(() => {
        fetch("/api/users/me", headers).then((res) => {
            res.json().then((user)=>{
                setUserData(user)
            });
        })
    }, []);

    return (
        <div className="my-club">
            <div className="container p-3">
                <h1 className={"text-center"}>My Club</h1>
                <p>Willkommen {userData ? userData.name: ""}</p>
            </div>
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
