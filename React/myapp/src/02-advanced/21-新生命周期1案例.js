import React, { Component } from 'react'
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

class FilmList extends Component {
    state = {
        list: [],
        type: 1
    }

    //初始化-执行一次
    componentDidMount() {
        if (this.props.type === 1) {
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
                this.setState({
                    list: res.data.data.films
                })
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
                this.setState({
                    list: res.data.data.films
                })
                console.log(res)
            })
            console.log("请求卖座即将上映的数据")
        }
    }

    //只负责取数据存入到当前状态中 官方建议
    static getDerivedStateFromProps(nextProps, nextState) {
        console.log("getDriveStateFromProps", nextProps
            , nextState)
        //该生命周期中无法使用ajax请求如果请求会发生意向不到的问题
        return {
            type: nextProps.type
        }
    }
    //合并 getDerivedStateFromProps componentDidUpdate 处理
    //getDerivedStateFromProps该生命周期 需要配合 componentDidUpdate
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate---" + this.state.type + "---" + prevState.type)
        //判断是否多次点击 
        //比如第一次 执行完毕 第二次如果重复点击那么直接return true;
        //只有不一样的时候才会执行ajax 避免了请求重复ajax
        if (this.state.type === prevState.type) {
            return
        } 
    }

    //父组件渲染后该方法 也会执行
    //componentWillReceiveProps
    //问题1：重新请求的风险不建议使用该方法
    // UNSAFE_componentWillReceiveProps(nextProps) {
    //     console.log("1")
    //     //this.props.type获取老的数据
    //     if (nextProps.type === 1) {
    //         //请求卖座正在热映的数据
    //         axios({
    //             url: "https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=3407832",
    //             method: "get",
    //             headers: {
    //                 'X-Client-Info': ' {"a":"3000","ch":"1002","v":"5.2.1","e":"16730104671885018196541441"}',
    //                 'X-Host': 'mall.film-ticket.film.list',
    //                 'X-Requested-With': 'XMLHttpRequest',
    //                 //'Authorization':''
    //             }
    //         }).then(res => {
    //             console.log(res.data.data.films)
    //             this.setState({
    //                 list: res.data.data.films
    //             })
    //         })
    //         //
    //         console.log("请求卖座正在热映的数据")
    //     }
    //     else {
    //         //请求卖座即将上映的数据
    //         axios({
    //             url: "https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=2&k=9109580",
    //             method: "get",
    //             headers: {
    //                 'X-Client-Info': ' {"a":"3000","ch":"1002","v":"5.2.1","e":"16730104671885018196541441"}',
    //                 'X-Host': 'mall.film-ticket.film.list',
    //                 'X-Requested-With': 'XMLHttpRequest'
    //             }
    //         }).then(res => {
    //             this.setState({
    //                 list: res.data.data.films
    //             })
    //             console.log(res)
    //         })
    //         console.log("请求卖座即将上映的数据")
    //     }
    // }

    render() {
        return <ul>
            {
                this.state.list.map(item =>
                    <li key={item.filmId}>
                        {item.name}
                    </li>
                )
            }
        </ul>
    }
}