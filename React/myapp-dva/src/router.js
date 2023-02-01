/*
 * @Author: Elon Snyder
 * @Date: 2023-01-31 15:43:25
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-01-31 18:29:28
 * @Description:This is the routers
 * @FilePath: \React\myapp-dva\src\router.js
 */
import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import App from './routes/App';
import Film from './routes/Film';
import Cinema from './routes/Cinema';
import Center from './routes/Center';
import Detail from './routes/Detail';
import Login from './routes/Login';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      {/* 当前页面刷新会回到film 如果加上Switch组件那么则在当前页 */}
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" render={() => <App>
          <Switch>
            <Route path="/film" component={Film}></Route>
            <Route path="/cinema" component={Cinema}></Route>
            {/* 路由hash模式 */}
            <Route path="/center"
              render={() => localStorage.getItem('token') ? <Center /> : <Redirect to="/login" />}
            ></Route>
            <Route path="/detail/:myid" component={Detail}></Route>

            {/* 页面加载默认一个选项卡 重定向到了Film */}
            <Redirect from='/' to="/film" />
          </Switch>
        </App>} />
      </Switch>
    </Router >
  );
}

export default RouterConfig;
