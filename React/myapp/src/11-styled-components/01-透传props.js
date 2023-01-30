import React, { Component } from 'react'
import styled from 'styled-components'

export default class App extends Component {
  render() {
    conso
    const StyledInput = styled.input`
    outline:none;
    border-radius:10px;
    border-bottom:1px solid red;
    `
    const StyledDiv=styled.div`
      background:yellow
    `
    return (
      <div>App
        {/* 透传 */}
        <StyledInput type="text" placeholder='输入' />
        <div ></div>
      </div>
    )
  }
}
