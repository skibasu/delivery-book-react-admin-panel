import React from "react"
import { Button } from "@material-tailwind/react"

function App() {
    return (
        <div className="flex flex-col justify-center items-center py-12">
            <h1 className="text-6xl font-bold underline text-red-600">
                Simple React Typescript Tailwind Sample
            </h1>
            <p className="text-orange  uppercase font-regular">Lorem ipsum</p>
            <Button>Button</Button>
        </div>
    )
}

export default App
