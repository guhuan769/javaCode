/*
 * @Author: Elon Snyder
 * @Date: 2023-01-29 15:26:52
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-01-29 20:57:09
 * @Description: 
 * @FilePath: \React\myappts\src\04-路由\router\index.tsx
 */

import React, { Component } from 'react';
// import {HashRouter, Route} from 'react-router-dom'
import {
  Routes,
  Route,
  Outlet,
  Link,
  useMatch,
  useResolvedPath,
} from "react-router-dom";
import type { LinkProps } from "react-router-dom";
import Film from '../views/Film'
import Center from '../views/Center'
import Cinema from '../views/Cinema'

export default class IndexRouter extends Component {

  render() {
    return (
      <div>
        <Routes>
          <Route path="/center" element={<Center />}>
          </Route>
          <Route path="/" element={<Film />}>

          </Route>
          <Route path="/cinema" element={<Cinema />}>
          </Route>

        </Routes>
      </div >
    )
  }
}

