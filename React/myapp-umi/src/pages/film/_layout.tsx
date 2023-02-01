/*
 * @Author: Elon Snyder
 * @Date: 2023-02-01 10:15:06
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-02-01 10:29:53
 * @Description:
 * @FilePath: \React\myapp-umi\src\pages\film\_layout.tsx
 */
import React from 'react'
import { Redirect, useLocation } from 'umi'

export default function Film(props: any) {
  console.log(props);
  const location = useLocation()
  //判断是/films
  if (location.pathname === "/film" || location.pathname === "/film/") {
    return <Redirect to="/film/nowplaying"></Redirect>
  }
  return (
    <div >
      <div style={{ height: '200px', background: 'yellow' }}>
        大轮播
      </div>
      {props.children}
    </div>
  )
}

