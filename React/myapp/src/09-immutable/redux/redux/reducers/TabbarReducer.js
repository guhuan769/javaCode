//1.引入redux,
//2.createStore(reducer )

//createStore 4.2之前的版本已经被弃用了 用新的legacy_createStore

import { fromJS } from "immutable"
import { act } from "react-dom/test-utils"
import { legacy_createStore as createStore } from "redux"
//import { createStore } from "redux"
//es的特性如果形参
const TabbarReducer = (prevState = fromJS({
    //默认值 该写法初始化状态如果原本状态为空可以这样初始化
    show: true,
    //.....
}), action) => {
    console.log("reducer", action)
    let newState = { ...prevState }
    switch (action.type) {
        case "elonhide=tabbar":
            // newState.show = false
            // return newState
            return prevState.set("show",false)
        case "elonshow=tabbar":
            // newState.show = true
            // return newState
            return prevState.set("show",true)
        default:
            return prevState
    }
}

export default TabbarReducer