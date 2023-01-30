/* eslint-disable import/no-anonymous-default-export */
/*
 * @Author: Elon Snyder
 * @Date: 2023-01-30 09:51:42
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-01-30 09:53:55
 * @Description: 
 * @FilePath: \React\myapp\src\11-styled-components\App.js
 */
import React, { Component } from 'react'
import styled from 'styled-components'

export default class extends Component {
  
    render() {
        const StyledFooter = styled.footer`
        background:yellow;
        position:fixed;
        left:0;
        bottom:0;
        width:100%;
        height:50px;
        line-height:50px;
        text-align:center;
        ul{
            display:flex;
            list-style:none;
            li{
                flex:1;
                &:hover{
                    background:red;
                }
            }
        }
        `
        return (
            <StyledFooter>
                <ul >
                    <li>首页</li>
                    <li>列表</li>
                    <li>我的</li>
                </ul>
            </StyledFooter>
        )
    }
}
