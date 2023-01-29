
import React from "react";
import { createRoot } from "react-dom/client";
import store from "./10-mobx/04-router/mobx/store";
import App from './10-mobx/04-router/App'
import { Provider } from "mobx-react";
// import App from './axiosdemo/axios针对cors'
// 为提供的创建一个 React 根container并返回根。
const root = createRoot(document.getElementById("root"));

//移动端
root.render(
    <Provider store={store}>
        <App />
    </Provider>

)
