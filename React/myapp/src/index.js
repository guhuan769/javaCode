
/*
    组件化是为了页面更清晰
*/
import React from "react";
import { createRoot } from "react-dom/client";
//导入得必须首字母大写
import App from './01-base/01-class组件'
import App1 from './01-base/02-函数式组件'
// 为提供的创建一个 React 根container并返回根。
const root = createRoot(document.getElementById("root"));
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

///<App/> 自动New一个实例 自动解析
root.render(<App1/>)