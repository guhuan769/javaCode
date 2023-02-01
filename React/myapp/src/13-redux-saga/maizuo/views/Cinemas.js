/*
 * @Author: Elon Snyder
 * @Date: 2023-01-31 08:56:50
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-01-31 10:39:13
 * @Description: 
 * @FilePath: \React\myapp\src\13-redux-saga\maizuo\views\Cinemas.js
 */
import React, { useEffect, useState } from 'react'
import store from '../redux/store'
import getCinemaListAction from '../redux/actionCreator/getCinemaListAction'

export default function Cinemas(props) {
  //console.log("props",store.getState().CinemaListReducer.list)
  const [cityName, setCityName] = useState(store.getState().CityReducer.cityName)
  const [cinemaList, setCinemaList] = useState(store.getState().CinemaListReducer.list)
  //console.log("cinemaList",cinemaList)
  useEffect(() => {
    console.log("CinemaListReducer", store.getState().CinemaListReducer.list.length)
    if (store.getState().CinemaListReducer.list.length === 0) {
      //   //去后台取数据
      //   //actiionCreator 里写异步 
      //store.dispatch(getCinemaListAction())
      store.dispatch({
        // type:"get-cinemalist"
        type:"get-cinemalist"
      })
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

  return (
    <div >
      <div style={{ overflow: "hidden" }}>
        <div onClick={() => {
          props.history.push(`/city`)
        }}
          style={{ float: "left" }}
        >
          {cityName}
        </div>
        <div style={{ float: "right" }}
          onClick={() => {
            props.history.push(`/cinemas/seach`)
          }}
        >搜索</div>
      </div>

      {
        cinemaList.map(item =>
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
