import React, { Component } from 'react'
import styled from 'styled-components'

export default class App extends Component {
  render() {
    const StyledInput = styled.input`
    outline:none;
    border-radius:10px;
    border-bottom:1px solid red;
    `
    //自定义属性 || 默认值
    const StyledDiv=styled.div`
      background:${props=>props.bg || 'yellow'};
      width:100px;
      height:100px
    `
    return (
      <div>App
        {/* 透传 */}
        <StyledInput type="text" placeholder='输入' />
        <StyledDiv  ></StyledDiv>
      </div>
    )
  }
}

