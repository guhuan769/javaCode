// class Test {
//     constructor() {
//         this.a =1;
//     }
//     Testa() {
//         console.log("testa");
//     }

import React, { Component } from "react";

// }

// class TestChild extends Test {
//     testb() {
//         console.log("testb");
//     }
// }

// var obj = new TestChild()
// obj.Testa();
// console.log(obj.a)
// obj.testb();
//作为组件必须继承 Component APp名称允许自定义
class KApp extends React.Component {
    //固定的render 不允许自定义
    render() {
        //保证return得语法是 jsx得语法
        return (
            <section>
                <div>
                    <ul>
                        <li>111</li>
                        <li>222</li>
                        <li>333</li>
                    </ul>
                </div>
                <div>新内容</div>
            </section>
        );
    }
}

///导出App组件
export default KApp;
