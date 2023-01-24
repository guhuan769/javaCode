import React, { Component, useEffect, useMemo, useState } from 'react'
import axios from 'axios'
/*
    useMemo 如果有一段复杂的逻辑
*/
export default function Cinema() {
    const [myText, setMyText] = useState("")
    const [cinemaList, setCinemaList] = useState([])

    useEffect(() => {
        axios({
            url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=5448007",
            method: "get",
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16730104671885018196541441","bc":"110100"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(res => {
            console.log(res.data.data.cinemas)
            setCinemaList(res.data.data.cinemas)
            //打印Log
            console.log(cinemaList)
        }).catch(err => {
            console.log(err)
        })
    })

    const getCinemaList = useMemo(() => cinemaList.filter(
        item => item.name.toUpperCase().includes(myText.toUpperCase())
            || item.address.toUpperCase().includes(myText.toUpperCase())
    ), [cinemaList, myText])
    return (
        <div>
            <input value={myText}
                onChange={(event) => {
                    console.log("onChange", event.target.value)
                    setMyText(event.target.value)

                }}
            />
            {
                getCinemaList.map(item =>
                    <dl key={item.cinemaId}>
                        <dt>{item.name}</dt>
                        <dl>{item.address}</dl>
                    </dl>
                )
            }
        </div>
    )

}

// export default class Cinema extends Component {

//     constructor() {
//         super()

//         this.state = {
//             cinemaList: [],
//             mytext: ""
//         }

//     }
//     //
//     //后面讲得声明周期函数 更适合发送ajax
//     render() {
//         return <div></div>
//     }

//     getCinemaList() {

//         return this.state.cinemaList.filter(
//             item => item.name.toUpperCase().includes(this.state.mytext.toUpperCase())
//                 || item.address.toUpperCase().includes(this.state.mytext.toUpperCase())
//         );
//     }
// }

/*
    filter 专门做过滤得
*/