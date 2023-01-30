/*
 * @Author: Elon Snyder
 * @Date: 2023-01-29 14:39:28
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-01-29 14:46:53
 * @Description: 
 * @FilePath: \React\myappts\src\03-function+ts\02-todo.tsx
 */
import React, { useRef, useState } from 'react'

export default function App() {
    const mytext = useRef<HTMLInputElement>(null)
    const [list, setlist] = useState<string[]>([])

    return (
        <div>
            <input ref={mytext} />
            <button
                onClick={() => {
                    //断定
                    console.log((mytext.current as HTMLInputElement).value)
                    setlist([...list, (mytext.current as HTMLInputElement).value])
                }}
            >click</button>

            {
                list.map(item=>
                    <li >{item}</li>
                    )
            }
        </div>
    )
}
