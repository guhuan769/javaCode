import React, { Component } from 'react'

class Field extends Component {
  render() {
    return <div style={{ background: "yellow" }}>
      <label>{this.props.label}</label>
      <input type={this.props.type}
        onChange={(evt) => {
         
          this.props.onChange(evt.target.value);
          console.log(evt.target.value)
        }} value={this.props.value}

      ></input>
    </div>
  }
}

export default class App extends Component {
  state = {
    //从本地存储获取localStorage
    username: localStorage.getItem("username"),
    password: localStorage.getItem("password")
  }
  render() {
    return (
      <div>
        <h1>登录页面</h1>
        <Field label="用户名" type="text"
          onChange={(value) => {
            localStorage.setItem("username", value); 
            this.setState({
              username: value
            })
            console.log(value)
          }} value={this.state.username}
        ></Field>

        <Field
          onChange={(value) => {
            this.setState({
              password: value
            })
            localStorage.setItem("username", value);
            console.log(value)
          }} value={this.state.password}
          label="密码" type="password"></Field>

        <button onClick={() => {
          console.log(this.state.username,
            this.state.password)
        }}>登录</button>
        <button onClick={()=>{
          this.setState({
            username:"",
            password:""
          })
        }}>取消</button>
      </div>
    )
  }
}
