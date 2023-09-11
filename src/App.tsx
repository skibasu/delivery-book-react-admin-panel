import React from "react"
import {
    createHashRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom"
import Layout from "./layouts/Layout"
import { nav } from "./routes"

function App() {
    const router = createHashRouter(
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
