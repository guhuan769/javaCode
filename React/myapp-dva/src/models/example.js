/*
 * @Author: Elon Snyder
 * @Date: 2023-01-31 15:43:25
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-01-31 18:53:57
 * @Description:
 * @FilePath: \React\myapp-dva\src\models\example.js
 */

export default {

  namespace: 'example',

  state: {isShow: true},

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
