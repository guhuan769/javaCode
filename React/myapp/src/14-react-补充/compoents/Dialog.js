/*
 * @Author: Elon Snyder
 * @Date: 2023-01-31 13:24:28
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-01-31 13:45:57
 * @Description: 
 * @FilePath: \React\myapp\src\14-react-补充\compoents\Dialog.js
 */
import React, { Component } from 'react'

export default class Dialog extends Component {
    render() {
        return (
            <div style={{
                width: '100%'
                , height: '100%',
                position: 'fixed'
                , left: 0, top: 0,
                background: 'rgba(0,0,0,0.7)',
                zIndex: "999999999"//可以让该组件到最顶级

            }}>Dialog</div>
        )
    }
}
