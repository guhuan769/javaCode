import React, { Component } from 'react'

export default class Tabbaar extends Component {
    state = {
        list: [{
            id: 1,
            Text: "电影"
        }, {
            id: 2,
            Text: "影院"
        }, {
            id: 3,
            Text: "我的"
        }],current: 0
    }
   
    render() {
        return (
            <div>
                {/* {
                    this.state.current == 0 && <Film></Film>
                }
                {
                    this.state.current == 1 && <Cinema></Cinema>
                }
                
                {
                    this.state.current == 2 && <Center></Center>
                } */}
                
                <ul>
                    {
                        this.state.list.map((item, index) =>
                            <li onClick={
                                () => this.handleClick(index)}
                                 className={this.state.current === index ? 'active' : ''} 
                                 key={item.id}>{item.Text}
                                 </li>
                        )
                    }
                </ul>
            </div>
        )
    }
    handleClick(index) {
        console.log(index)
        this.setState(
            {
                current: index
            }
        )
        this.props.event(index);
        //通知父组件
    }
}
