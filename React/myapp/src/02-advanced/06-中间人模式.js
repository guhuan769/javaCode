import React, { Component } from 'react'
import axios from 'axios'
import './css/03-非父子.css'

/*
适用场景 :简单得页面可使用
*/
export default class App extends Component {

    constructor() {
        super()

        // axios({
        //     url: "https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=6482287",
        //     method: "get",
        //     headers: {
        //         'X-Client-Info': ' {"a":"3000","ch":"1002","v":"5.2.1","e":"16730104671885018196541441"}',
        //         'X-Host': 'mall.film-ticket.film.list',
        //         'X-Requested-With': 'XMLHttpRequest'
        //     }
        // }).then(res => {
        //     console.log(res)
        //     //打印Log
        // }).catch(err => {
        //     console.log(err)
        // })

        this.state = {
            filmList: [],
            info: ""
        }

        axios.get('/test.json').then(res => {
            console.log(res.data.data.data.films)
            this.setState({
                filmList: res.data.data.data.films
            })
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.filmList.map(item =>
                        <FilmItem key={item.filmId}
                            // 将item所有得对象传入
                            {...item}
                            onEvent={(value) => {
                                this.setState({
                                    info: value
                                })
                            }
                            }
                        ></FilmItem>
                    )
                }
                <FilmDetail info={this.state.info} />
            </div>
        )
    }
}

//受控组件
class FilmItem extends Component {
    render() {
        console.log(this.props)
        let { name, poster, grade, synopsis } = this.props
        return <div className="filmitem"
            onClick={() => {
                // console.log(synopsis)
                this.props.onEvent(synopsis)
            }}>
            <img src={poster} alt={name} />
            <h4>{name}</h4>
            <div>观众评分{grade}</div>
        </div>
    }
}

class FilmDetail extends Component {
    render() {
        return <div className='filemdetail'>
            {this.props.info}
        </div>
    }
}