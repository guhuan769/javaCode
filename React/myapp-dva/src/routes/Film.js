/*
 * @Author: Elon Snyder
 * @Date: 2023-01-31 16:18:43
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-01-31 17:43:17
 * @Description:
 * @FilePath: \React\myapp-dva\src\routes\Film.js
 */
import React, { Component } from 'react'
import request from '../utils/request'

export default class Film extends Component {
  state = {
    list: []
  }
  componentDidMount() {
    request("https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=397947",
      {
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16730104671885018196541441"}'
          , 'X-Host': 'mall.film-ticket.film.list'
        },
      }
    ).then(res => {
      console.log(res.data.data.films);
      this.setState({
        list: res.data.data.films
      })
    })
  }
  render() {
    return (
      <div>
        {
          this.state.list.map(item =>
            <li key={item.filmId}
              onClick={() => {
                console.log(this.props);
                this.props.history.push(`/detail/${item.filmId}`)
              }}
            >
              <img src={item.poster}
                alt={item.name}
                style={{ width: '100px' }}
              ></img>
              <p>{item.name}</p>
            </li>
          )
        }
      </div>
    )
  }
}
