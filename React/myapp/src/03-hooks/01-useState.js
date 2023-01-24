import React, { useState } from 'react'

export default function App() {

    const [name, setName] = useState("Elon Snyder")
    const [age, setAge] = useState(100)

    return (
        <div>App-{name}{age}</div>
    )
}
