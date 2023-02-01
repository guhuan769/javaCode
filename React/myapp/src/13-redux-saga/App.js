/*
 * @Author: Elon Snyder
 * @Date: 2023-01-30 15:41:15
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-01-30 17:20:21
 * @Description: 
 * @FilePath: \React\myapp\src\13-redux-saga\App.js
 */
import React, { Component } from 'react'
import store from './redux/store'

export default class App extends Component {
  render() {
    return (
      <div >
        <button
          onClick={() => {
            if (store.getState().list1.length === 0) {
              //dispatch2
              store.dispatch({
                type: "get-list1"
              })
              console.log("start", store.getState().list2)
            }
            else {
              console.log("缓存", store.getState().list1)
            }
          }}
        >click-ajax-异步缓存</button>

        <button
          onClick={() => {
            if (store.getState().list2.length === 0) {
              //dispatch
              store.dispatch({
                type: "get-list2"
              })
              console.log("start", store.getState().list2)
            }
            else {
              console.log("缓存", store.getState().list2)
            }
          }}
        >click-ajax-异步缓存1</button>
        </div>
        )
  }
}
