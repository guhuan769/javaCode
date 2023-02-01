/*
 * @Author: Elon Snyder
 * @Date: 2023-02-01 10:03:12
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-02-01 10:05:08
 * @Description:
 * @FilePath: \React\myapp-umi\src\pages\index.tsx
 */
//重定向
import { Redirect } from 'umi'
import React from 'react'

export default function index() {
  return (
    <Redirect to="/film"></Redirect>
  )
}

