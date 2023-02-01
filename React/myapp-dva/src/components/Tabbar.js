/*
 * @Author: Elon Snyder
 * @Date: 2023-01-31 16:22:41
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-01-31 16:34:40
 * @Description:H5 得语法标签footer
 * @FilePath: \React\myapp-dva\src\components\Tabbar.js
 */
import React, { Component } from 'react'
import style from './Tabbar.css'
import { NavLink } from 'dva/router'


export default class Tabbar extends Component {

  render() {
    console.log(style);
    return (
      <footer>
        <ul>
          <li><NavLink to="/film" activeClassName={style.active}>film</NavLink></li>
          <li><NavLink to="/cinema" activeClassName={style.active}>cinema</NavLink></li>
          <li><NavLink to="/center" activeClassName={style.active}>center</NavLink></li>
        </ul>
      </footer>
    )
  }
}
