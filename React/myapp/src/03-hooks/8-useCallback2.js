import React, { useCallback, useMemo, useState } from 'react'

/*
useCallback 如果存入空数组
*/
export default function App() {
    const [myname, setmyname] = useState("elon")
    const [text, setText] = useState("")
    const [list, setList] = useState(["aa", "bb", "ccc"])

    //如果usecallback({},[])放入空数组就会出现意向不到的问题
    const handelChange = useCallback(
        (evt) => {
            console.log("handelChange", evt.target.value)
            setText(evt.target.value)
        }
    )

    const handleAdd = useCallback(
        (evt) => {
            console.log("handleAdd", text, evt)
            setList([text, ...list])
            setText("")
        }, [text, list]
    )

    const handleDel = useMemo(
        ()=>(index) => {

            console.log(index)
            var newlist = [...list]
            newlist.splice(index, 1)
            setList(newlist)
        }, [list]
    )

    return (
        <div>

            {myname} - <button
                onClick={() => {
                    setmyname("xiaoming")
                }}
            >change-myname</button>

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
