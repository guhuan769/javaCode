import React, { useState } from 'react'


export default function App() {
    //问题每次都会重新执行 为啥此处不初始化0呢
    //因为useState本身就是记忆函数
    const [count, setcount] = useState(0)

    var mycount = 0

   
    return (
        <div>
            <button onClick={() => {
                setcount(count + 1)
                 mycount++
            }}>Add</button>
            {count}-{mycount}
        </div>
    )
}
