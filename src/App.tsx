import React from "react"
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom"
import Layout from "./layouts/Layout"
import { nav } from "./routes"

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Layout />}>
                {nav.map(({ element, key, path }) => (
                    <Route key={key} path={path} element={element} />
                ))}
            </Route>
        )
    )
    return <RouterProvider router={router} />
}

export default App
