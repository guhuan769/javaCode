import React, { Component } from 'react'
import MRouter from './router/indexRouter'
import Tabbar from './views/components/Tabbar'
import store from './redux/store'
import { connect } from 'react-redux'
import { Button, Space } from 'antd-mobile'
import './util/request'

class App extends Component {
    //store.subsribe 订阅
    componentDidMount() {
        store.subscribe(() => {
            //此处需要主动的访问store的状态
            //redux中需要自己获取 状态
            //console.log("app 中订阅", store.getState())
            this.setState({
                isShow: store.getState().TabbarReducer.show
            })
        })
    }
    render() {
        return (
            <div>
                {/* <Button size='small' color='danger'>Danger</Button> */}
                {/* 其他内容 声明式导航 */}
                <MRouter>
                    {this.props.isShow && <Tabbar></Tabbar>}
                </MRouter>
            </div>


        )
    }
}

//自定义的想要往APP里加入属性

const mapStateToProps = (state) => {
    return {
        a: 1,
        b: 1,
        isShow: state.TabbarReducer.show
    }
}

//connect 订阅者
export default connect(mapStateToProps)(App)

//withRouter(FiltItem)