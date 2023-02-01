import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva({
  //去掉# 一级路由
  // history: require("history").createBrowserHistory()
  //加上#号二级路由
  history: require("history").createHashHistory()
});

// 2. Plugins
// app.use({});

// 3. Model
//同步
app.model(require('./models/maizuo').default);
// app.model(require('./models/bbb').default);
// app.model(require('./models/ccc').default);


// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
