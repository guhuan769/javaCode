import React, { Component } from 'react'
import { Button, Space } from 'antd';

export default class App extends Component {
  render() {
    return (
      <div>
         <Button type="primary"
         loading={true}
         onClick={()=>{
            console.log("click")
         }}
         >Primary Button</Button>
      </div>
    )
  }
}
