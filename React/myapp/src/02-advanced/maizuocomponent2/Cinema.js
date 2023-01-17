import React, { Component } from 'react'
import axios from 'axios'

export default class Cinema extends Component {

    constructor() {

        super()

        this.state = {
            cinemaList: [],
            backCinemaList: []
        }
        //axios第三方得库，专门用于请求数据  需要安装
        // axios.get("https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=5448007").then(res=>{
        //     console.log(res)
        // }).catch(err=>{
        //     console.log(err)    
        // })

        // X-Client-Info: {"a":"3000","ch":"1002","v":"5.2.1","e":"16730104671885018196541441","bc":"110100"}
        // X-Host: mall.film-ticket.cinema.list
        axios({
            url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=5448007",
            method: "get",
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16730104671885018196541441","bc":"110100"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(res => {
            console.log(res.data.data.cinemas)
            this.setState({
                cinemaList: res.data.data.cinemas,
                backCinemaList: res.data.data.cinemas
            })
            //打印Log
            console.log(this.state.cinemaList)
        }).catch(err => {
            console.log(err)
        })
    }
    //
    //后面讲得声明周期函数 更适合发送ajax
    render() {

        return (
            <div style={{backgroud:"red",marginBottom:"10px"}}>
                <input onInput={this.onInputEvent} />
                {
                    this.state.cinemaList.map(item =>
                        <dl  key={item.cinemaId}>
                            <dt>{item.name}</dt>
                            <dl>{item.address}</dl>
                        </dl>
                    )
                }
            </div>
        )
    }
    onInputEvent = (event)=>{
        console.log("input",event.target.value);
        //如果更改原数组会有不可预期得后果
        var newCinemaList =
        this.state.backCinemaList.filter(
            item=>item.name.toUpperCase().includes(event.target.value.toUpperCase())
            ||item.address.toUpperCase().includes(event.target.value.toUpperCase())
            );
        console.log(newCinemaList);
        this.setState({
            cinemaList:newCinemaList,
        })
        //cinemaList值会被覆盖

        console.log(this.state.cinemaList)
    }
}

/*
    filter 专门做过滤得
*/