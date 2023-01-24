import React, { Component, useEffect, useState } from 'react'
import axios from 'axios'

export default class App extends Component {

    state = {
        type: 1
    }

    render() {
        return (
            <div>
                <ul>
                    <li
                        onClick={() => {
                            this.setState({
                                type: 1
                            })

                        }}
                    >正在热映</li>
                    <li
                        onClick={() => {
                            this.setState({
                                type: 2
                            })
                        }}
                    >即将上映</li>
                </ul>
                <FilmList type={this.state.type}></FilmList>
            </div>
        )
    }
}

///函数式组件也支持属性
function FilmList(props) {
    const [list, setList] = useState([])
    useEffect(() => {
        if (props.type === 1) {
            //请求卖座正在热映的数据
            axios({
                url: "https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=3407832",
                method: "get",
                headers: {
                    'X-Client-Info': ' {"a":"3000","ch":"1002","v":"5.2.1","e":"16730104671885018196541441"}',
                    'X-Host': 'mall.film-ticket.film.list',
                    'X-Requested-With': 'XMLHttpRequest',
                    //'Authorization':''
                }
            }).then(res => {
                console.log(res.data.data.films)
                setList(res.data.data.films)
            })
            console.log("请求卖座正在热映的数据")
        }
        else {
            //请求卖座即将上映的数据
            axios({
                url: "https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=2&k=9109580",
                method: "get",
                headers: {
                    'X-Client-Info': ' {"a":"3000","ch":"1002","v":"5.2.1","e":"16730104671885018196541441"}',
                    'X-Host': 'mall.film-ticket.film.list',
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }).then(res => {
                setList(res.data.data.films)
                console.log(res)
            })
            console.log("请求卖座即将上映的数据")
        }
    }, [props.type])
    return <ul>
        {
            list.map(item =>
                <li key={item.filmId}>
                    {item.name}
                </li>
            )
        }
    </ul>
}