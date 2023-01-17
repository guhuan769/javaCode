import React, { Component } from 'react'

/*
    使用无状态
*/
export default class Tabbaar extends Component {
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

                <ul >
                    {
                        this.props.list.map((item, index) =>
                            <li onClick={
                                () => this.handleClick(index)}
                                className={this.props.current === index ? 'active' : ''}
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
        // this.setState(
        //     {
        //         current: index
        //     }
        // )
        this.props.event(index);
        //通知父组件
    }
}


