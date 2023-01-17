import React, { Component } from 'react'
import './css/02-maizuo.css'
//下面三自定义组件
import Film from './maizuocomponent/Film'
import Cinema from './maizuocomponent/Cinema'
import Center from './maizuocomponent/Center'
import Tabbaar from './maizuocomponent/Tabbaar'
import Navbar from './maizuocomponent/Navbar'

export default class App extends Component {
    state = {
        current:0
    }
    which()
    {
        switch(this.state.current)
        {
            case 0:
                return <Film></Film>
            case 1:
                return <Cinema></Cinema>
            case 2:
                return <Center></Center>
            default:
                return null;
        }
    }
    render() {
        return (
            <div>
                <Navbar onEvent={
                    (value)=>{
                        this.setState({
                            current:value 
                        })  
                        console.log("Navbar"+value,"告诉Tabbar");
                    }
                }/>
                {/* {
                    this.state.current == 0 && <Film></Film>
                }
                {
                    this.state.current == 1 && <Cinema></Cinema>
                }
                
                {
                    this.state.current == 2 && <Center></Center>
                } */}
                
                {
                    //处理函数 函数表达式表达式
                    this.which()
                }

                <Tabbaar event={
                    (index)=>{
                        this.setState({
                            current:index
                        })
                    }
                }></Tabbaar>
            </div>
        )
    }
}
