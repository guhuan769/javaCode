/*
 * @Author: Elon Snyder
 * @Date: 2023-01-26 17:27:49
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-01-29 11:08:06
 * @Description: 
 * @FilePath: \React\myapp\src\08-redux-redux-mobile\views\Seach.js
 */
import React, { useState, useEffect, useMemo } from 'react'
import store from '../redux/store'
import getCinemaListAction from '../redux/actionCreator/getCinemaListAction'
import { Button, SearchBar, Space, Toast } from 'antd-mobile'

export default function Seach() {
    const [myText, setMyText] = useState("")
    const [cinemaList, setCinemaList] = useState(store.getState().CinemaListReducer.list)
    //console.log("cinemaList",cinemaList)
    useEffect(() => {
        console.log("CinemaListReducer", store.getState().CinemaListReducer.list.length)
        if (store.getState().CinemaListReducer.list.length === 0) {
            //   //去后台取数据
            //   //actiionCreator 里写异步 
            store.dispatch(getCinemaListAction())
        }
        else {
            //长度不等于0直接返回即可
            console.log("store 缓存 ")
        }
        //订阅
        var unsubscribe = store.subscribe(() => {
            console.log("cinema订阅 ", store.getState().CinemaListReducer.list)
            setCinemaList(store.getState().CinemaListReducer.list)
        })

        // window 取消订阅  
        return () => {
            //取消订阅
            unsubscribe()
        }
    }, [])

    const getCinemaList = useMemo(() => cinemaList.filter(
        item => item.name.toUpperCase().includes(myText.toUpperCase())
            || item.address.toUpperCase().includes(myText.toUpperCase())
    ), [cinemaList, myText])

    return (
        <div>
            {/*             
            <input value={myText}
                onChange={(event) => {
                    console.log("onChange", event.target.value)
                    setMyText(event.target.value)
                }}
            /> */}

            <div style={{ padding: "10px" }}>
                <SearchBar
                    placeholder='请输入内容'
                    showCancelButton={() => true}

                    value={myText}
                    onChange={(value) => {
                        //console.log("onChange", event.target.value)
                        setMyText(value)
                    }}
                />
            </div>
            {
                getCinemaList.map(item =>
                    <dl key={item.cinemId}
                        style={{ padding: "10px" }}
                    >
                        <dt>{item.name}</dt>
                        <dd
                            style={{ fontSize: "12px", color: "gray" }}>
                            {item.address}
                        </dd>
                    </dl>
                )
            }
        </div>
    )
}
