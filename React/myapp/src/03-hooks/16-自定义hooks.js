import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios'

function useCinemaList() {
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
    }, [])
    
    return {
        cinemaList
    }
}

function useFilter(cinemaList, myText) {
    const getCinemaList = useMemo(() => cinemaList.filter(
        item => item.name.toUpperCase().includes(myText.toUpperCase())
            || item.address.toUpperCase().includes(myText.toUpperCase())
    ), [cinemaList, myText])

    return {
        getCinemaList
    }
}
/*
    useMemo 如果有一段复杂的逻辑
*/
export default function Cinema() {
    const [myText, setMyText] = useState("")
    const { cinemaList } = useCinemaList()
    const { getCinemaList } = useFilter(cinemaList, myText)
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
