import React, { useReducer} from 'raect'

//处理函数
const reducer = (prevState, action) => {
    console.log("reduce被执行了", prevState, action)
    let newstate = { ...prevState }
    switch (action.type) {
        case "elon-minus":
            newstate.count--
            return newstate
        case "elon-Add":
            newstate.count++
            return newstate
        default:
            return prevState
    }
}

//外部的对象
const intialState = {
    count: 0,
}

export default function App() {
    const [state, dispatch] = useReducer(reducer, intialState)
    return (
        <div >
            <button
                onClick={() => {
                    dispatch({
                        type: "elon-minus"
                    })
                }}
            >-</button>
            {state.count}
            <button onClick={() => {
                dispatch({
                    type: "elon-Add"
                })
            }}>+</button>
        </div>
    )
}


