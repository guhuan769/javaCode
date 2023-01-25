
const CinemaListReducer = (prevState = {
    //默认值 该写法初始化状态如果原本状态为空可以这样初始化
    list: []
    //.....
}, action) => {
    let newState = { ...prevState }
    switch (action.type) {
        case "change-list":
            newState.list = action.payload
            return newState
        default:
            return prevState
    }
}
export default CinemaListReducer
