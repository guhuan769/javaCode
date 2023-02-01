import { withRouter } from 'dva/router'
import React, { Component } from 'react'
import request from '../utils/request'

export default class Center extends Component {

  componentDidMount() {
    request("/api/mmdb/movie/v3/list/hot.json?ct=%E5%8C%97%E4%BA%AC&ci=1&channelId=4"
    ).then(res => {
      console.log(res)
    })
    request("/web_feed/getWebList",{
      method:"POST"
    }
    ).then(res => {
      console.log("腾讯",res)
    })

    request("/users").then(res => {
      console.log("users", res);
    })
  }

  render() {
    return (
      <div>Center
        <WithChild />
      </div>
    )
  }
}

class Child extends Component {
  render() {
    return (
      <div>
        Child
        <button
          onClick={() => {
            console.log(this.props)
            localStorage.removeItem("token")
            this.props.history.push(`/login`)
          }}
        >退出登录</button>
      </div>
    )
  }
}
//如果此处不用withRouter那么Child就无法获取props里得属性
const WithChild = withRouter(Child)
