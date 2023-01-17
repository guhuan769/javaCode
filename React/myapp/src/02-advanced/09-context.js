import React, { Component } from 'react'
import axios from 'axios'
import './css/03-非父子.css'

/*
适用场景 :简单得页面可使用
*/

//创建context的对象 上下文
const GlobalContext = React.createContext();

export default class App extends Component {

    constructor() {
        super()

        this.state = {
            filmList: [],
            info:"1111"
        }

        axios.get('/test.json').then(res => {
            //console.log(res.data.data.data.films)
            this.setState({
                filmList: res.data.data.data.films
            })
        }).catch(err => {
            console.log(err)
        })
    }



    render() {
        return (
            //</GlobalContext.Provider> 供应商
            <GlobalContext.Provider value={{
                call: "打电话",
                sms: "短信",
                info: this.state.info,
                changeInfo:(value)=>{
                    this.setState({
                        info:value
                    })
                }
            }}>
                <div>
                    {
                        this.state.filmList.map(item =>
                            <FilmItem key={item.filmId}
                                // 将item所有得对象传入
                                {...item} 
                            ></FilmItem>
                        )
                    }
                    <FilmDetail />
                </div>
            </GlobalContext.Provider>
        )
    }
}

//受控组件
class FilmItem extends Component {
    render() {
        //console.log(this.props)
        let { name, poster, grade, synopsis } = this.props
        return (
            //消费者
            <GlobalContext.Consumer>
                {/* 换写法使用回调函数写法 一下写法是规定 */}
                {
                    (value) => {
                        console.log(value)
                        //value.info = "2222"
                        return (
                            <div className="filmitem"
                                onClick={() => {
                                   // console.log(synopsis)
                                   value.changeInfo(synopsis)
                                }}>
                                <img src={poster} alt={name} />
                                <h4>{name}</h4>
                                <div>观众评分{grade}</div>
                            </div>
                        )
                    }
                }

            </GlobalContext.Consumer>
        )
    }
}

class FilmDetail extends Component {
    render() {
        return (
            <GlobalContext.Consumer>
                {
                    (value) => {
                        console.log(value)
                        return (
                            <div className='filemdetail'>
                                detail-{value.info}
                            </div>
                        )
                    }
                }
            </GlobalContext.Consumer>
        )
    }
}