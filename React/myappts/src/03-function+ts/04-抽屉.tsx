/*
 * @Author: Elon Snyder
 * @Date: 2023-01-29 15:06:17
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-01-29 15:23:54
 * @Description: 
 * @FilePath: \React\myappts\src\03-function+ts\04-抽屉.tsx
 */
import React, { useState } from 'react'

export default function App() {
    const [isShow, setisShow] = useState(true)
    return (
        <div>
            <Navbar
                cb={() => {
                    console.log("")
                    setisShow(!isShow)
                }}
            ></Navbar>
            {isShow && <Sidebar></Sidebar>}
        </div>
    )
}

interface Iprops {
    title?: string,
    cb: () => void
}

function Navbar(props: Iprops) {
    return <div>
        navbar-<button
            onClick={() => {
                props.cb()
            }}
        >click</button>
    </div>
}
function Sidebar() {
    return <div>
        Sidebar-
    </div>
}
