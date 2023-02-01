import React, { Component } from 'react'
import { connect } from 'dva'

class Cinema extends Component {
  componentDidMount() {
    if (this.props.list.length === 0) {
      //dispatch
      this.props.dispatch({
        type: "maizuo/getCinemaList"
      })
    }
    else {
      console.log("缓存", this.props.list)
    }
  }
  render() {
    return (
      <div>
        <ul></ul>
        {
          this.props.list.map(item =>
            <li item={item.cinemaId}>
              {item.name}
            </li>
          )
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.maizuo.list
  }
}
//把低阶cinema变成高阶
export default connect(mapStateToProps)(Cinema)
