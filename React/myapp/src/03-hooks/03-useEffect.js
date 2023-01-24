import React, { useEffect, useState } from 'react'
import axios from 'axios'

/*
每次set都会导致app执行切勿请求数据否则后果导致服务器崩溃
useEffect 可以解决该问题
*/

export default function App() {

    const [list, setList] = useState([])
    
    useEffect(() => {
        axios.get("/test.json").then(
            res => {
                console.log(res.data.data.data.films)
                setList(res.data.data.data.films)
            }
        )
    }, [])//传空数组


    return (
        <div>
            <ul>
                {
                    list.map(item =>
                        <li key={item.filmId}>{item.name}</li>
                    )
                }
            </ul>
        </div>
    )
}
