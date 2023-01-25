import React from 'react'

export default function Detail(props) {
    //console.log(window.location.href)
    //利用该ID拿数据
    //1 对应在 
     console.log(props.match.params.myid)
    //2
    //console.log(props.location.query.id)
    //3
   // console.log(props.location.state.id)
    return (
        <div>Detail</div>
    )
}


