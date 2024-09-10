import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App.tsx";
import Home from "../Pages/Home/Home.tsx";
import SearchPage from "../Pages/SearchPage/SearchPage.tsx";
import Company from "../Pages/Company/Company.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "search", 
                element: <SearchPage />,
            },
            {
                path: "company/:ticker",
                element: <Company />,
            }
        ]
    }
]);
