/*
 * @Author: Elon Snyder
 * @Date: 2023-01-28 19:15:53
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-01-28 20:32:28
 * @Description: 
 * @FilePath: \React\myappts\src\index.tsx
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './01-ts基础/04-函数';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>
  // document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
