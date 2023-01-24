import React, { useRef, useState } from 'react'

export default function App() {
    const [list, setList] = useState(["aa", "bb", "ccc"])
    //如何保存住一个变量 useRef也可以保存一个变量当然也可以用usestate
    const mytext = useRef()//等价于React.createRef()

    const handleAdd = () => {
        console.log("mytext " + mytext.current.value)
        setList([...list, mytext.current.value])
        mytext.current.value = "";
    }

    const handleDel = (index) => {

        console.log(index)
        var newlist = [...list]
        newlist.splice(index, 1)
        setList(newlist)
    }

    return (
        <div>
            <input ref={mytext} />
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
