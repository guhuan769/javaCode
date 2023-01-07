import React, { Component } from 'react'
import kerwinPropTypes from 'prop-types'//验证方法是否是数字或者bool值
console.log(kerwinPropTypes) //
/*
    属性 复用性 并且还可以进行传参
*/
export default class Navbar extends Component {
    state = {
        //只能内部自己用,外部是无法使用得此处就要使用属性
    }



    //react 属性验证 此类属性叫类属性 react 中存在
    // Navbar.prototype = {
    //     // left:,//验证是不是字符串得方法,
    //     // left首位:,///验证是否是bool得方法
    //     //属性验证
    //     title: kerwinPropTypes.string,//验证是否是string
    //     leftshow: kerwinPropTypes.bool//验证是否是bool
    // }
    //新得类属性
    static propTypes = {
        // left:,//验证是不是字符串得方法,
        // left首位:,///验证是否是bool得方法
        //属性验证
        title: kerwinPropTypes.string,//验证是否是string
        leftshow: kerwinPropTypes.bool//验证是否是bool
    }

    ///默认值
    static defaultProps = {
        leftshow: true
    }

    //属性是父组件传来得，this.props
    render() {
        //console.log(this.props) this.props获取属性
        let { leftshow, title } = this.props;
        console.log(this.props)
        return (
            <div>
                {leftshow && <button>返回</button>}
                Navbar-{title}
                <button>home</button>
            </div>
        )
    }
}

// ///默认值
// Navbar.defaultProps = {
//     leftshow:true
// }


//对象属性
class Test {
    a = 1
    //加了static叫静态属性
    static a = 100;
}

var obj = new Test()
console.log(Test.a, obj.a)