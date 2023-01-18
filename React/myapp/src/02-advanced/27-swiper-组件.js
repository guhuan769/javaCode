import React, { Component } from 'react'
import ElonSwiper from './swiper/swiper'
import ElonSwiperItem from './swiper/swiperItem'
import axios from 'axios'

export default class App extends Component {
    state = {
        list: []
    }
    //
    componentDidMount() {
        axios({
            url: "https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=700804",
            method: "get",
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16730104671885018196541441"}',
                'X-Host':' mall.film-ticket.film.list',
            }
        }).then(res => {
            console.log(res.data.data.films)
            this.setState({
                list: res.data.data.films
            })
        })
        // setTimeout(() => {
        //     this.setState({
        //         list: ["aaa", "bbb", "ccc", "ddd", "eee"]
        //     })
        // }, 1000)
    }

    render() {
        return (
            <div>
                <ElonSwiper loop={true}>
                    {
                        this.state.list.map(item =>

                            <ElonSwiperItem key={item.filmId}>
                                <img src={item.poster} style={{ height: "200px" }} alt={item.name}></img>
                            </ElonSwiperItem>
                        )
                    }
                </ElonSwiper>
            </div>
        )
    }
}
