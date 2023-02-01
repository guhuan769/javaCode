import { withRouter } from 'dva/router'
import React, { Component } from 'react'
import request from '../utils/request'

export default class Login extends Component {
  render() {
    return (
      <div>Login
        <WithChild />
      </div>
    )
  }
}

class Child extends Component {
  username = React.createRef()
  password = React.createRef()
  render() {
    return (
      <div>
        Child
        用户名:
        <input type="text" ref={this.username} />
        <br />
        密码:
        <input type="password" ref={this.password} />

        <button onClick={() => {
          console.log("username", this.username.current.value);
          console.log("password", this.password.current.value);
          request("/users/login", {
            method: "POST",
            body: JSON.stringify({
              username: this.username.current.value,
              password: this.password.current.value
            }),
            headers: {
              "Content-Type": "applic"
            }

          }).then((result) => {
            console.log(result.data);
            if (result.data.ok) {
              localStorage.setItem("token", "1232312")
              this.props.history.push(`/film`)
            }
            else {
              alert("用户密码不匹配")
            }
          })
          console.log(this.props)
          // localStorage.setItem("token", "1232312")
          // this.props.history.push(`/film`)
        }}>登录</button>
      </div>
    )
  }
}

const WithChild = withRouter(Child)
