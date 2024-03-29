import React, { useEffect } from 'react'
//import store from '../redux/store'
import getCinemaListAction from '../redux/actionCreator/getCinemaListAction'
import { connect } from 'react-redux'

function Cinemas(props) {
  let { list, getCinemaListAction } = props;
  useEffect(() => {
    console.log("CinemaListReducer", list.length)
    if (list.length === 0) {
      //   //去后台取数据
      //   //actiionCreator 里写异步 
      getCinemaListAction()
    }
    else {
      //长度不等于0直接返回即可
      //console.log("store 缓存 ")
    }
  }, [list], getCinemaListAction)

  return (
    <div >
      <div style={{ overflow: "hidden" }}>
        <div onClick={() => {
          props.history.push(`/city`)
        }}
          style={{ float: "left" }}
        >
          {props.cityName}
        </div>
        <div style={{ float: "right" }}
          onClick={() => {
            props.history.push(`/cinemas/seach`)
          }}
        >搜索</div>
      </div>
      {
        props.list.map(item =>
          <dl key={item.cinemId}
            style={{ padding: "10px" }}>
            <dt>{item.name}</dt>
            <dd
              style={{ fontSize: "12px", color: "gray" }}>
              {item.address}
            </dd>
          </dl>
        )
      }

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    list: state.CinemaListReducer.list,
    cityName: state.CityReducer.cityName
  }
}

const mapDispatchToProps = {
  getCinemaListAction
}
//connect包装组件
export default connect(mapStateToProps, mapDispatchToProps)(Cinemas)