/*
 * @Author: Elon Snyder
 * @Date: 2023-01-30 15:44:26
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-01-30 17:07:41
 * @Description: 
 * @FilePath: \React\myapp\src\13-redux-saga\redux\reducer.js
 */
function reducer(prevState = {
    list1: [],
    list2: []
}, action = {}) {
    var newState = { ...prevState }
    switch (action.type) {
        case "change-list1":
            newState.list1 = action.payload
            return newState
            case "change-list2":
                newState.list2 = action.payload
                return newState
        default:
            return prevState
    }
}

export default reducer