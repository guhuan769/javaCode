/*
 * @Author: Elon Snyder
 * @Date: 2023-01-31 13:24:28
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-01-31 13:50:32
 * @Description: 
 * @FilePath: \React\myapp\src\14-react-补充\compoents\PortalDialog.js
 */
import React, { Component } from 'react'
import { createPortal } from 'react-dom'

export default class Dialog extends Component {
    render() {
        return createPortal(
            <div style={{
                width: '100%'
                , height: '100%',
                position: 'fixed',
                left: 0, top: 0,
                background: 'rgba(0,0,0,0.7)',
                zIndex: "999999999"//可以让该组件到最顶级
                , color: "white",
            }}
                onClick={() => {
                    //div冒泡 事件冒泡该知识为小知识 知道即可 弹出了dialog依然会触发
                    console.log("box身上监听得事件");
                }}
            >Dialog-
                <div>loading-正在加载中</div>
                {this.props.children}
                <button onClick={this.props.onClose}>close</button>
            </div>,
            document.body
        )
    }
}
