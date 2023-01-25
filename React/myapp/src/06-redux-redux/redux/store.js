//1.引入redux,
//2.createStore(reducer )

//createStore 4.2之前的版本已经被弃用了 用新的legacy_createStore

import { act } from "react-dom/test-utils"
import { applyMiddleware, combineReducers, legacy_createStore as createStore,compose } from "redux"
import CityReducer from "./reducers/CityReducer"
import TabbarReducer from "./reducers/TabbarReducer"
import CinemaListReducer from './reducers/CinemaListReducer'
import reduxThunk from 'redux-thunk'//redux中间件
//如果使用了primise的中间件那么也需要引入
import reduxPromise from 'redux-promise'
//利用合并函数合并各种reducer
const reducer = combineReducers({
    CityReducer,
    TabbarReducer,
    CinemaListReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//如果式异步那么此处的applyMiddleware(reduxThunk)就会起作用
const store = createStore(reducer,composeEnhancers(applyMiddleware(reduxThunk,reduxPromise)))

/*
    store.dispatch
    store.subscribe
    store.getState
*/

// function createElonStore(reducer) {
//     var list = []
//     var state = reducer()
//     function subscribe(callback) {
//         list.push(callback)
//     }

//     function dispatch(action) {
//         reducer(state, action)
//         for (var i in list) {
//             list[i] && list[i]()
//         }
//         //通知reducer执行
//     }

//     function getState() {
//         return state
//     }

//     //return 出去
//     return {
//         subscribe,
//         dispatch,
//         getState
//     }
// }




export default store

/*
    var obj = {
        myname:"elon"
    }

    function test(obj){
        obj.myname = "xiaoming"
        return obj
    }
    test(obj)

纯函数：
    1.对外界没有副作用
    2. 同样的输入得到同样的输出
*/