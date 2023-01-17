import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div style={{background:"yellow",textAlign:"center"
      ,overflow:"hidden"}}>
        <button style={{float:"left"}}>back</button>
        <span>卖座电影</span>
        <button 
        onClick={()=>{
            console.log("Navbar")
            let value = 2;
            this.props.onEvent(value);
        }}
        style={{float:"right"}}>center</button>
      </div>
    )
  }
}
