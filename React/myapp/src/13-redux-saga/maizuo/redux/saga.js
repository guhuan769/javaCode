/*
 * @Author: Elon Snyder
 * @Date: 2023-01-31 09:07:18
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-01-31 11:27:46
 * @Description: 
 * @FilePath: \React\myapp\src\13-redux-saga\maizuo\redux\saga.js
 */
import { take, fork, put, call, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

function* watchSaga() {
    console.log("watchSaga start");
    yield takeEvery("get-cinemalist", getCinemaList)
}


function* getCinemaList() {
    //异步处理
    //call函数发异步请求
    //阻塞得调用fn
    let res = yield call(getListAction)//返回值是promise对象得函数
    console.log("saga", res)
    //put函数发出新得action
    yield put({
        type: "change-cinemalist",
        payload: res
    })
    //put 函数发出新得
}

function getListAction() {
    return axios({
        url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=5448007",
        method: "get",
        headers: {
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16730104671885018196541441","bc":"110100"}',
            'X-Host': 'mall.film-ticket.cinema.list'
        }
    }).then(res => {
        //打印Log
        return res.data.data.cinemas
    })
    // console.log("sagagetListAction",list)
    // return list
}
export default watchSaga