import React, { Component } from 'react'

/*
shouldComponentUpdate：能够提升性能 判断 1000个只更新改变的那个
*/
class Box extends Component {
    render() {
        console.log()
        return <div style={{
            // background: "red",
            height: "100px",
            width: "100px",
            border: this.props.current
                ===
                this.props.index ?
                "1px solid red"
                :
                "1px solid gray",
            margin: "10px",
            float: "left"
        }}></div>
    }
}

export default class App extends Component {
    //阻止渲染
    shouldComponentUpdate(nextProps) {
        //上一次的current与index
        if (this.props.current === this.props.index
            ||
            //这一次的current等于index就true
            nextProps.current === nextProps.index
        ) {
            return true
        }
        return false
    }
    state = {
        list: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
        current: 0
    }

    render() {
        return (
            <div>
                <input type="number"
                    onChange={(evt) => {
                        console.log(evt.target.value)
                        this.setState({
                            current: Number(evt.target.value)
                        })
                    }}
                    value={this.state.current}
                />
                <div style={{ overflow: "hidden" }}>
                    {
                        this.state.list.map((item, index) =>
                            <Box
                                key={item}
                                index={index}
                                current={this.state.current} />
                        )
                    }
                </div>
            </div>
        )
    }
}
