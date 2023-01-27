import React, { useEffect } from 'react'
import store from '../redux/store'
import { show, hide } from '../redux/actionCreator/TabbarActionCreator'
import { connect } from 'react-redux'

function Detail(props) {
    //console.log(window.location.href)
    //利用该ID拿数据
    //1 对应在 

    //2
    //console.log(props.location.query.id)
    //3
    // console.log(props.location.state.id)
    //hooks写法 
    //从props解构出方法
    let { show, hide, match } = props
    useEffect(() => {
        console.log("create", props)
        // store.dispatch 发布/通知
        //console.log(props.match.params.myid, "利用该ID拿数据")
        //store.dispatch(hide())
        hide()
        return () => {
            //react路由会彻底删掉
            //console.log("destroy")
            show()
            //store.dispatch(show())
        }
    }, [match.params.myid, show, hide])
    return (
        <div>Detail</div>
    )
}


const mapDispatchToProps = {
    show,
    hide
}

//高阶包装 第一个值不用则Null
//Connect("将来给孩子传的属性","将来给孩子传的回调函数")
export default connect(null,mapDispatchToProps)(Detail)

