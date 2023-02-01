/*
 * @Author: Elon Snyder
 * @Date: 2023-01-06 09:10:45
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-01-31 14:54:58
 * @Description: 
 * @FilePath: \React\myapp\src\index.js
 */
/*
 * @Author: Elon Snyder
 * @Date: 2023-01-06 09:10:45
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-01-31 08:57:24
 * @Description: 
 * @FilePath: \React\myapp\src\index.js
 */

/*
    组件化是为了页面更清晰
*/
import React from "react";
import { createRoot } from "react-dom/client";


//import { Provider } from 'react-redux'

import { store, persistor } from './08-redux-redux-mobile/redux/store';//redux中的数据获取对象信息
import { PersistGate } from 'redux-persist/integration/react'
//导入得必须首字母大写
import App from './14-react-补充/memo/App'
import { Provider } from "react-redux";
// 为提供的创建一个 React 根container并返回根。
const root = createRoot(document.getElementById("root"));

//移动端
root.render(
    //严格模式
    // <React.StrictMode>
    //Provider负责把store往app传
    <Provider store={store} >
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
    // </React.StrictMode>
)

//PC
// root.render(
//     //严格模式
//     // <React.StrictMode>
//     //Provider负责把store往app传
//             <App />
//     // </React.StrictMode>
// )


// 根可用于将 React 元素渲染到 DOM 中
//root.render(<App />);

// root.render(<div>
//     <b>232131321hhhh</b>
//     <ul>
//         <li>1321321</li>
//         <li>213</li>
//         <li>范德萨范德萨</li>
//     </ul>
// </div>);

// root.render(React.createElement("div",{
// id:"aaa",
// className:"bbb"
// },"11111111221"));

//,document.getElementById("root")

///<App/> 自动New一个实例 自动解析 APP是否式唯一呢？？组件是否可以嵌套呢
//
// <React.StrictMode><App5 />  </React.StrictMode> 严格模式

