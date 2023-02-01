import { take, fork, put, call, takeEvery } from 'redux-saga/effects'

function* watchSaga1() {
    // while (true) {
    //     //take  监听 组件发来的action
    //     //fork同步指向异步处理函数.
    //     yield take("get-list1")
    //     //fork 同步指向异步处理函数
    //     yield fork(getList1)
    // }
    yield takeEvery("get-list1",getList1)
}

function* getList1() {
    //异步处理

    //call函数发异步请求
    //阻塞得调用fn
    let res = yield call(getListAction1)//返回值是promise对象得函数
    //put函数发出新得action
    yield put({
        type: "change-list1",
        payload: res
    })
    //put 函数发出新得
}

function getListAction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["111", "222", "333"])
        }, 2000)
    })
}
export{getList1}
export default watchSaga1
