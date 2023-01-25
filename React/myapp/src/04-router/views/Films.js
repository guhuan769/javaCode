import React, { Component } from 'react'
import { Route, Switch ,Redirect} from 'react-router-dom'
import Nowplaying from '../views/films/Nowplaying'
import Comingsoon from '../views/films/Comingsoon'

export default class Films extends Component {
    render() {
        return (
            <div>

                <div style={{ height: "200px", background: "yellow" }}>
                    大轮播
                </div>

                <div>导航栏</div>

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
