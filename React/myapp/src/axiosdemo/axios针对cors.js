import React, { Component } from 'react'
import axios from 'axios'

export default class axios针对cors extends Component {
  constructor() {
    super()

    axios.post('https://localhost:44332/api/LoginLoginByUserNameAndPwd', {
      userName: "super",
      password: "123456"
    })
      .then(function (response) {
        console.log(response.data.token);
        localStorage.setItem("token", response.data.token)
      })
      .catch(function (error) {
        console.log(error);
      });
    axios({
      url: "https://localhost:44332/api/LoginGetPubCommonData",
      method: "get",
      data: {}, params: { name: "123" },
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    }).then(res => {
      console.log("data", res)
    }).catch(err => {
      console.log(err)
    })
  }
  render() {
    return (
      <div>axios针对cors</div>
    )
  }
}
