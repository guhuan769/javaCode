import React, { useState } from 'react'

export default function App() {
    const [text, setText] = useState("")
    const [list, setList] = useState(["aa", "bb", "ccc"])

    const handelChange = (evt) => {
        console.log("handelChange", evt.target.value)
        setText(evt.target.value)
    }

    const handleAdd = (evt) => {
        console.log("handleAdd", text, evt)
        setList([text, ...list])

        setText("")
    }

    const handleDel = (index) => {

        console.log(index)
        var newlist = [...list]
        newlist.splice(index, 1)
        setList(newlist)
    }

    return (
        <div>
            <input onChange={handelChange} value={text} />
            <button
                onClick={handleAdd}>
                Add
            </button>
            <ul>
                {
                    list.map((item, index) =>
                        <li key={item}>
                            {item}
                            <button onClick={() =>
                                handleDel(index)
                            }>delete</button>
                        </li>
                    )
                }
            </ul>

            {!list.length && <div>暂无待办事项</div>}
        </div>
    )
}
