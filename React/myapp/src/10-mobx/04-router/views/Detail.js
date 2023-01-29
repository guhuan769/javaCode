import React, { useEffect } from 'react'
import store from '../mobx/store'


export default function Detail(props) {
    //hooks写法 
    useEffect(() => {
        store.changeHide()
        return () => {
            //react路由会彻底删掉
            store.changeShow()
        }
    }, [])

    return (
        <div>Detail</div>
    )
}


