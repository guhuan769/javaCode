/*
 * @Author: Elon Snyder
 * @Date: 2023-01-30 16:57:56
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-01-30 18:47:16
 * @Description: 
 * @FilePath: \React\myapp\src\13-redux-saga\redux\saga\saga2.js
 */
import { take, fork, put, call, takeEvery } from 'redux-saga/effects'

function* watchSaga2() {
    // while (true) {
    //     //take  监听 组件发来的action
    //     //fork同步指向异步处理函数.
    //     yield take("get-list2")
    //     //fork 同步指向异步处理函数
    //     yield fork(getList2)
    // }
    yield takeEvery("get-list1", getList2)
}

function* getList2() {
    //异步处理
    //call函数发异步请求
    //阻塞得调用fn
    let res1 = yield call(getListAction2_1)//返回值是promise对象得函数
    let res2 = yield call(getListAction2_2, res1)//返回值是promise对象得函数
    //put函数发出新得action
    yield put({
        type: "change-list2",
        payload: res2
    })
    //put 函数发出新得
}

function getListAction2_1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["44", "55", "66"])
        }, 2000)
    })
}

function getListAction2_2(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([...data], "777", "888", "999")
        }, 2000)
    })
}

export default watchSaga2

export{getList2}