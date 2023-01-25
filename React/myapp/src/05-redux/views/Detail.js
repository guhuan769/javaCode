import React, { useEffect } from 'react'
import store from '../redux/store'
import { show, hide } from '../redux/actionCreator/TabbarActionCreator'

export default function Detail(props) {
    //console.log(window.location.href)
    //利用该ID拿数据
    //1 对应在 

    //2
    //console.log(props.location.query.id)
    //3
    // console.log(props.location.state.id)
    //hooks写法 
    useEffect(() => {
        console.log("create")
        // store.dispatch 发布/通知
        console.log(props.match.params.myid, "利用该ID拿数据")
        store.dispatch(hide())
        return () => {
            //react路由会彻底删掉
            console.log("destroy")
            store.dispatch(show())
        }
    }, [])
    return (
        <div>Detail</div>
    )
}


