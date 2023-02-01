/*
 * @Author: Elon Snyder
 * @Date: 2023-01-31 11:45:44
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-01-31 14:14:05
 * @Description: 
 * @FilePath: \React\myapp\src\14-react-补充\App.js
 */
import React, { Component } from 'react'
import './App.css'
import PortalDialog from './compoents/PortalDialog'

// const Nowplaying = React.lazy(() => import('./component/Nowplaying'))
// const Comingsoon = React.lazy(() => import('./component/Comingsoon'))
export default class App extends Component {
    state = {
        isShow: false
    }
    render() {
        return (
            <div className='box'>
                <div className='left'>left</div>
                <div className='right'>
                    <button
                        onClick={() => {
                            this.setState({
                                isShow: !this.state.isShow
                            })
                        }}
                    >
                        ajax
                    </button>
                    {
                        this.state.isShow
                        &&
                        <PortalDialog onClose={() => {
                            this.setState({
                                isShow: false
                            })
                        }}>

                            <div>1111</div>
                            <div>222</div>
                            <div>333</div>
                        </PortalDialog>
                    }
                </div>
            </div>
        )
    }
}
