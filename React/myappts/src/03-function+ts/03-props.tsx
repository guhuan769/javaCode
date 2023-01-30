/*
 * @Author: Elon Snyder
 * @Date: 2023-01-29 14:48:19
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-01-29 14:57:35
 * @Description: 
 * @FilePath: \React\myappts\src\03-function+ts\03-props.tsx
 */
import React from 'react'

export default function App() {
    return (
        <div>App
            <Child name="aaaa"></Child>

        </div>
    )
}

interface IProps {
    name: string
}

// function Child(props: IProps) {
//     return <div>child-{props.name}</div>
// }

const Child: React.FC<IProps> = (props) => {
    return <div>child-{props.name}</div>
}
