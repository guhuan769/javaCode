import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import './css/index.css'

/*
适用场景 :简单得页面可使用
此处的useEffect如果用不好会导致性能消耗严重或服务器崩溃
*/

//创建context的对象 上下文
const GlobalContext = React.createContext();

export default function App() {
    const [filmList, setfilmList] = useState([])
    const [info, setinfo] = useState("")

    useEffect(() => {
        axios.get('/test.json').then(res => {
            console.log("elon willcom ")
            setfilmList(res.data.data.data.films)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        //</GlobalContext.Provider> 供应商
        <GlobalContext.Provider value={{
            call: "打电话",
            sms: "短信",
            info: info,
            changeInfo: (value) => {
                setinfo(value)
            }
        }}>
            <div>
                {
                    filmList.map(item =>
                        <FilmItem key={item.filmId}
                            // 将item所有得对象传入
                            {...item}
                        ></FilmItem>
                    )
                }
                <FilmDetail></FilmDetail>
            </div>
        </GlobalContext.Provider>
    )
}

function FilmItem(props) {
    let { name, poster, grade, synopsis } = props
    const value = useContext(GlobalContext)
    // console.log("context " + value)

    //消费者
    {/* 换写法使用回调函数写法 一下写法是规定 */ }
    //value.info = "2222"
    return (
        <div className="filmitem"
            onClick={() => {
                //console.log(synopsis)
                value.changeInfo(synopsis)
            }}>
            <img src={poster} alt={name} />
            <h4>{name}</h4>
            <div>观众评分{grade}</div>
        </div>
    )
}

function FilmDetail() {
    const value = useContext(GlobalContext)
    console.log("log")
    return (
        <div className='filemdetail'>
            detail1-{value.info}
        </div>
    )
}