/*
 * @Author: Elon Snyder
 * @Date: 2023-01-31 17:38:11
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-01-31 19:14:42
 * @Description:
 * @FilePath: \React\myapp-dva\src\routes\Detail.js
 */
import { connect } from 'dva'
import React, { Component } from 'react'

class Detail extends Component {

  componentDidMount() {
    console.log(`
    接收上个页面传来得id，利用此id取数据`,
      this.props.match.params.myid);
    // console.log(this.props);
    this.props.dispatch({
      type: "maizuo/hide"//此处得maizuo是models/maizuo里面得Namespace
    })
  }

  //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
  componentWillUnmount() {
    this.props.dispatch({
      type: "maizuo/show"//此处得maizuo是models/maizuo里面得Namespace
    })
  }

  render() {
    return (
      <div>
        Detail
      </div>
    )
  }
}

export default connect((state) => {

})(Detail)
