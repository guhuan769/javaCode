import React, { Component } from 'react'
import axios from 'axios'

export default class axios针对cors extends Component {
  constructor() {
    super()
    axios({
      url: "https://localhost:44332/api/LoginGetPubCommonData",
      method: "get",
      headers: {
      }
    }).then(res => {
      console.log(res)
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
