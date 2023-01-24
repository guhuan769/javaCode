import React, { useEffect, useState } from 'react'

export default function App() {
    const [name, setName] = useState("elon snyder")

    //第一次执行一次,之后name(依赖) 更新也会执行
    useEffect(() => {
        setName(name.substring(0, 1).toUpperCase() +
            name.substring(1)
        )
    }, [name])

    return (
        <div>App-{name}
            <button onClick={() => {
                setName("xiaoming")
            }}>click</button>
        </div>
    )
}
