/*
 * @Author: Elon Snyder
 * @Date: 2023-01-29 09:48:38
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-01-29 11:09:33
 * @Description: 
 * @FilePath: \React\myapp\src\08-redux-redux-mobile\util\request.js
 */
/*
* axios拦截器
*/

import axios from 'axios'
import { Toast } from 'antd-mobile'

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    Toast.show({
        icon: 'loading',
        content: '加载中…',
        duration: 0
    })
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    Toast.clear()
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});