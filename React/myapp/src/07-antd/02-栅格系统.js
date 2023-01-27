import React, { Component } from 'react'
import { Col,  Row } from 'antd';
import './css/css.css'

export default class App extends Component {
    render() {
        return (
            <div>
                <Row >
                    <Col className="gutter-row" span={8}>111</Col>
                    <Col className="gutter-row" offset={8} span={8}>111</Col>
                    {/* <Col className="gutter-row" span={8}>111</Col> */}
                </Row>
            </div>
        )
    }
}
