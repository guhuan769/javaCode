import { getCinemaListService } from "../services/maizuo";

export default {

  namespace: 'maizuo',

  state: {
    isShow: true,
    list: []
  },
  reducers: {
    hide(prevState, action) {
      return { ...prevState, isShow: false }
    },
    show(prevState, action) {
      return { ...prevState, isShow: true }
    },
    //payload解构
    changeCinemaList(prevState, { payload }) {
      return { ...prevState, list: payload }
    }
  }, subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      console.log("初始化");
    },
  },
  //异步 redux-saga
  effects: {
    //加*符合saga得要求
    *getCinemaList(action, { call, put, }) {
      // console.log("obj",obj)
      //call方法异步处理
      var res = yield call(getCinemaListService)//promise对象
      console.log(res.data.data.cinemas)
      //put给下一个
      yield put({
        type: "changeCinemaList",
        payload: res.data.data.cinemas
      })
    }
  }
}
