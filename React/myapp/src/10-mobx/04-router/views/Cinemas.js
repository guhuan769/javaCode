import React, { useEffect, useState } from 'react'
import store from '../mobx/store'
import { autorun } from 'mobx'
import { Observer } from 'mobx-react'

export default function Cinemas(props) {
  // const [cityName, setCityName] = null
  // const [cinemaList, setCinemaList] = useState([])
  useEffect(() => {
    if (store.list.length === 0) {
      store.getList()
    }
    //订阅

    return () => {
      //取消订阅？
    }
  }, [])

  return (
    <div >
      <Observer>
        {
          () => {
            return store.list.map(item =>
              <dl key={item.cinemId}
                style={{ padding: "10px" }}
              >
                <dt>{item.name}</dt>
                <dd
                  style={{ fontSize: "12px", color: "gray" }}>
                  {item.address}
                </dd>
              </dl>
            )
          }
        }</Observer>
    </div>
  )
}


