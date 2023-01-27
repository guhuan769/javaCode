import React, { Component } from 'react'
import { Route, Switch, Redirect, NavLink } from 'react-router-dom'
import Nowplaying from '../views/films/Nowplaying'
import Comingsoon from '../views/films/Comingsoon'
import '../views/css/Film.css'
import { Swiper, Tabs } from 'antd-mobile'
import axios from 'axios'

export default class Films extends Component {

    state = {
        looklist: []
    }
    componentDidMount() {
        // console.log(this.props.location.pathname)
        axios({
            url: "https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=1850633",
            method: "get",
            headers: {
                "X-Host": "mall.film-ticket.film.list",
                "X-Requested-With": "XMLHttpRequest"
            }
        }).then(res => {
            // console.log("res", res.data.data.films)
            this.setState({
                looklist: res.data.data.films
            })
        })
    }

    render() {
        return (
            <div >
                {/* <div style={{ height: "200px", background: "yellow" }}>
                    大轮播
                </div> */}
                <Swiper autoplay={true} loop={true}>
                    {
                        this.state.looklist.map(item =>
                            <Swiper.Item key={item.filmId}
                            >
                                <img
                                    style={{ height: "200px", width: "100%" }}
                                    src={item.poster} alt={item.name}></img>
                            </Swiper.Item>
                        )
                    }
                </Swiper>
                <div style={{ position: "sticky", top: 0, background: "white" }}>
                    {/* <ul>
                        <li><NavLink to="/films/nowplaying"
                            activeClassName="elonfilmactive" >正在热映</NavLink></li>
                        <li><NavLink to="/films/comingsoon"
                            activeClassName="elonfilmactive" >即将上映</NavLink></li>
                    </ul> */}
                    <Tabs
                        onChange={(value) => {
                            console.log(value)
                            this.props.history.push(value)
                        }}

                        activeKey={this.props.location.pathname}
                    >
                        <Tabs.Tab title='正在热映' key='/films/nowplaying'>
                        </Tabs.Tab>
                        <Tabs.Tab title='即将上映' key='/films/comingsoon'>
                        </Tabs.Tab>
                    </Tabs>
                    {/* 路由配置 嵌套路由 */}
                   
                </div>
                <Switch>
                        <Route path="/films/nowplaying"
                            component={Nowplaying} />
                        <Route path="/films/comingsoon"
                            component={Comingsoon} />
                        <Redirect from="/films" to="/films/nowplaying" />
                    </Switch>

            </div>
        )
    }
}
