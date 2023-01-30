import React, { Component } from 'react'
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Films from '../views/Films'
import Center from '../views/Center'
import Cinemas from '../views/Cinemas'
import NotFound from '../views/NotFound'
import Detail from '../views/Detail'
import Login from '../views/Login'
//BrowserRouter, 
/*

   BrwoserRouter 路径没有#号 ，好看，真正朝后端发请求要页面，后端没有对应
   的路径处理，就会404，不好看 

   HashRouter ，待#号的 不会向后端发送请求
*/
function isAuth() {
    return localStorage.getItem("token")
}

export default class indexRouter extends Component {
    render() {
        return (
            <div>
                <Router>
                    {this.props.children}
                    {/* Switch被包裹住刷新只會匹配當前頁 */}
                    <Switch>
                        <Route  path="/films" component={Films}></Route>
                        <Route path="/cinemas" component={Cinemas}></Route>
                        <Route path="/center"
                            render={(props) => {
                               console.log("login", props)
                                return isAuth() ? <Center myname="elon"
                                    {...props}
                                /> : <Redirect to="/login" />
                            }}
                        ></Route>

                        <Route path="/login" component={Login} />
                        {/* /detail/:myid 动态路由 */}
                        <Route path="/detail/:myid" component={Detail}></Route>
                        {/* <Route path="/detail" component={Detail}></Route> */}
                        {/* <Route path={"/films/nowplaying"} component={Nowplaying}
                        ></Route> */}
                        {/* Redirect 模糊匹配 必须让Redirect精准匹配 关键字 exact 固定 */}
                        <Redirect from="/" to="/films" exact />

                        <Route component={NotFound}></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}
