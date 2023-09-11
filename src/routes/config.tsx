import React from "react"
import Home from "../screens/Home/Home"
import Login from "../screens/Login/Login"
import NotFound from "../screens/NotFound/NotFound"
import PrivateRoute from "./PrivateRoute"

export const nav: TNav = [
    {
        path: "/",
        key: "Home",
        element: (
            <PrivateRoute>
                <Home />
            </PrivateRoute>
        ),
    },
    {
        path: "login",
        key: "Login",
        element: <Login />,
    },
    {
        path: "*",
        key: "NotFound",
        element: <NotFound />,
    },
]
