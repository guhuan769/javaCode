import React, { Component } from 'react'
import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.min.css'

export default class App extends Component {
    state = {
        list: ["111", "222", "333"]
    }

    componentDidMount() {
        //引入模块
        var mySwiper = new Swiper('.swiper', {
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
            //分页器
            modules: [Navigation, Pagination],
        });
    }

    render() {
        return (
            <div>
                <div className="swiper" style={{
                    height: "200px"
                    , background: "yellow"
                }}>
                    <div className="swiper-wrapper">
                        {
                            this.state.list.map(item =>
                                <div
                                    key={item}
                                    className="swiper-slide">
                                    {item}
                                </div>
                            )
                        }
                    </div>
                    {/* <!-- 如果需要分页器 --> */}
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        )
    }
}
