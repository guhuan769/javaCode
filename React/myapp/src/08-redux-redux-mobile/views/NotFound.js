import React, { Component, useEffect } from 'react'
import { connect } from 'react-redux'

function NotFound(props) {
    useEffect(() => {
        console.log(props)
    }, [props])
    return (
        <div>404 Not Found</div>
    )
}

function elonconnect(cb,obj) {
    var value = cb()
    return (MyComponent) => {
        return (props) => {
            return <div style={{ color: "red" }}>
                {/* 新增属性 */}
                <MyComponent {...value} {...props} {...obj} />
            </div>
        }
    }
}




export default elonconnect(() => {
    return {
        a: 1,
        b: 2
    },{
        aa(){},
        bb(){}
    }
})(NotFound)