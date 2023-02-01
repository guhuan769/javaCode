import React, { Component } from 'react'
import { Route, Switch, Redirect, NavLink } from 'react-router-dom'
import Nowplaying from '../views/films/Nowplaying'
import Comingsoon from '../views/films/Comingsoon'
import '../views/css/Film.css'

export default class Films extends Component {
    render() {
        return (
            <div>

                <div style={{ height: "200px", background: "yellow" }}>
                    大轮播
                </div>
                <div>
                    <ul>
                        <li><NavLink to="/films/nowplaying"
                            activeClassName="elonfilmactive" >正在热映</NavLink></li>
                        <li><NavLink to="/films/comingsoon"
                            activeClassName="elonfilmactive" >即将上映</NavLink></li>
                    </ul>
                </div>

                {/* 路由配置 嵌套路由 */}
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
