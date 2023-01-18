import React, { Component } from 'react'
import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.min.css'

export default class ElonSwiper extends Component {
    componentDidMount() {
        //引入模块
        var mySwiper = new Swiper('.swiper', {
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
            //分页器
            modules: [Navigation, Pagination],
            loop: Boolean(this.props.loop) // 循环模式选项
        });
        console.log("ElonSwiper-componentDidMount--"+this.props.loop)
    }

    render() {
        return (
            <div>
                <div className="swiper" style={{

                }}>
                    <div className="swiper-wrapper">
                        {this.props.children}
                    </div>
                    {/* <!-- 如果需要分页器 --> */}
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        )
    }
}
