
const CityReducer = (prevState = {
    //默认值 该写法初始化状态如果原本状态为空可以这样初始化
    cityName: "北京"
    //.....
}, action) => {
    let newState = { ...prevState }
    switch (action.type) {
        case "change-city":
            newState.cityName = action.value
            return newState
        default:
            return prevState
    }
}
export default CityReducer
