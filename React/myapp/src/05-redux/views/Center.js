import React from 'react'
import { withRouter } from 'react-router-dom' 

function Center(props) {
    console.log("Center",props)
    return (
        <div>
            Center
            <div onClick={() => {
                //console.log(props)
                props.history.push(`/filmsorder`)
            }}>电影订单</div>
        </div>
    )
}
//导入爸爸组件可以提供props

export default withRouter(Center)