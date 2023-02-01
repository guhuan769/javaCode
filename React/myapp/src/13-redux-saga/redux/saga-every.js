/*
 * @Author: Elon Snyder
 * @Date: 2023-01-30 18:47:45
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-01-30 18:56:56
 * @Description: 
 * @FilePath: \React\myapp\src\13-redux-saga\redux\saga-every.js
 */

//统一监听saga
import { all,takeEvery,put,call } from 'redux-saga/effects'
import watchSaga1, { getList1 } from './saga/saga1'
import watchSaga2, { getList2 } from './saga/saga2'

function* watchSaga() {
    // yield all([watchSaga1(), watchSaga2()])
    yield takeEvery("get-list1",getList1)
    yield takeEvery("get-list1", getList2)
}

export default watchSaga