import React, { useContext, useEffect, useReducer } from 'react'
import axios from 'axios'
import './css/index.css'
import { render } from '@testing-library/react';

/*
适用场景 :简单得页面可使用
此处的useEffect如果用不好会导致性能消耗严重或服务器崩溃
*/

//创建context的对象 上下文
const GlobalContext = React.createContext();

const initailState = {
    filmList: [],
    info: ""
}

const reducer = (prevState, action) => {
    let newState = { ...prevState }
    switch (action.type) {
        case "change-filemlist":
            newState.filmList = action.value
            return newState
        case "change-info":
            newState.info = action.value
            return newState
        default:
            return prevState
    }
}

export default function App() {
    //缺点 useReducer异步无法执行
    const [state, dispatch] = useReducer(reducer, initailState)

    useEffect(() => {
        axios.get('/test.json').then(res => {
            // console.log("elon willcom ")
            // setfilmList(res.data.data.data.films)
            dispatch({
                type: "change-filemlist",
                value: res.data.data.data.films
            })
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        //</GlobalContext.Provider> 供应商
        <GlobalContext.Provider value={{
            state,
            dispatch
        }}>
            <div>
                {
                    state.filmList.map(item =>
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
    //解构
    const { dispatch } = useContext(GlobalContext)
    // console.log("context " + value)

    //消费者
    {/* 换写法使用回调函数写法 一下写法是规定 */ }
    //value.info = "2222"
    return (
        <div className="filmitem"
            onClick={() => {
                console.log(synopsis)
                // value.changeInfo(synopsis)
                dispatch({
                    type: "change-info",
                    value: synopsis
                })
            }}>
            <img src={poster} alt={name} />
            <h4>{name}</h4>
            <div>观众评分{grade}</div>
        </div>
    )
}

function FilmDetail() {
    const { state } = useContext(GlobalContext)
    console.log("log--", state)
    return (
        <div className='filemdetail'>
            detail-{state.info}
        </div>
    )
}