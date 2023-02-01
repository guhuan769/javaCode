/*
 * @Author: Elon Snyder
 * @Date: 2023-02-01 10:37:55
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-02-01 10:47:03
 * @Description:
 * @FilePath: \React\myapp-umi\src\layouts\index.tsx
 */
import React from 'react'
import { NavLink } from 'umi'
import './index.less'

export default function Index(props: any) {
  return (
    <div>index
      {props.children}
      <ul>
        <li><NavLink to="/film" activeClassName="active">film</NavLink></li>
        <li><NavLink to="/cinema" activeClassName="active">cinema</NavLink></li>
        <li><NavLink to="/center" activeClassName="active">center</NavLink></li>
      </ul>
    </div>
  )
}
