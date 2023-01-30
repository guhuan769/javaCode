/*
 * @Author: Elon Snyder
 * @Date: 2023-01-29 14:28:15
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-01-29 14:36:20
 * @Description: 
 * @FilePath: \React\myappts\src\03-function+ts\01-state.tsx
 */
import React, { useState } from 'react'

export default function App() {
    //指定泛型类型
    const [name, setName] = useState<string>("elon")
    return (
        <div>
            app-{name.substring(0, 1).toUpperCase() + name.substring(1)}
            <button onClick={()=>{
                setName("xiaoming")
            }}>click</button>
        </div>
    )
}

