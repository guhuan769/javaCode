import React, { Component } from 'react'
import styled from 'styled-components'

export default class App extends Component {
  render() {
    const StyledChild = styled(Child)`
    background:yellow;
    font-size:15px;
    `
    return (
      <div>
        <StyledChild/>
      </div>
    )
  }
}I

function Child(props){
  return <div className={props.className}>
    Child
  </div>
}