import React, {useEffect, useState} from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import "primereact/resources/themes/vela-green/theme.css";
import "primereact/resources/primereact.min.css";
import './App.css';
import Home from "./views/Home";

const headers = {headers: {"Authorization": "Bearer " + localStorage.getItem("react-token")}};

function App() {
    const [userData, setUserData] = useState(null);

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home/>,
        },
    ]);

    useEffect(() => {
        fetch("http://localhost:8080/user", headers).then((data) => {
            setUserData(data);
        })
    }, []);

    return (
        <div className="my-club">
            <h1 className={"text-center"}>My Club</h1>
            <p>Willkommen {userData}</p>
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
