/*
 * @Author: Elon Snyder
 * @Date: 2023-01-30 14:22:24
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-01-30 14:33:34
 * @Description: 
 * @FilePath: \React\myapp\src\11-styled-components\03-样式扩展.js
 */
import React, { Component } from 'react'
import styled from 'styled-components'

export default class App extends Component {
  render() {
    const StyledButton = styled.button`
    width:100px;
    height:100px;
    background:yellow;
    `

const StyledButton2 = styled(StyledButton)`
background:red;
`
    return (
        <div>
            <StyledButton>App</StyledButton>
            <StyledButton2>App</StyledButton2>
        </div>
    )
  }
}
