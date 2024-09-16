import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App.tsx";
import Home from "../Pages/Home/Home.tsx";
import SearchPage from "../Pages/SearchPage/SearchPage.tsx";
import Company from "../Pages/Company/Company.tsx";
import CompanyProfile from "../Components/CompanyProfile/CompanyProfile.tsx";
import IncomeStatement from "../Components/IncomeStatement/IncomeStatement.tsx";

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
                children: [
                    { path: "company-profile", element: <CompanyProfile /> },
                    { path: "income-statement", element: <IncomeStatement /> }
                ]
            }
        ]
    }
]);
