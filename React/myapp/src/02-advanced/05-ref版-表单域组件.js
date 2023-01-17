import React, { Component } from 'react'

class Field extends Component {
    //内部保留state
    state = {
        value: ""
    }

    clear() {
        this.setState({
            value: ""
        })
    }
    setValue(value){
        this.setState({
            value:value
        })
    }
    render() {
        return <div style={{ background: "yellow" }}>
            <label>{this.props.label}</label>
            <input type={this.props.type}
                value={this.state.value}
                onChange={(evt) => {
                    console.log(evt.target.value)
                    this.setState({
                        value: evt.target.value
                    })
                }
                }
            />
        </div>
    }
}

export default class App extends Component {
    username = React.createRef()
    password = React.createRef()

    render() {
        return (
            <div>
                <h1>登录页面</h1>
                <Field label="用户名" type="text"
                    ref={this.username}
                ></Field>

                <Field
                    ref={this.password}
                    label="密码" type="password"></Field>

                <button onClick={() => {
                    console.log(
                        this.username.current.state.value,
                        this.password.current.state.value
                    )

                    this.username.current.setValue("123");

                }}>登录</button>

                <button onClick={() => {
                    this.username.current.clear()
                    this.password.current.clear()
                }}>取消</button>

            </div>
        )
    }
}
