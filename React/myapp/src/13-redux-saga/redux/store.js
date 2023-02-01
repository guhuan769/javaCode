import { legacy_createStore as createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import createSagaMiddleware from 'redux-saga'
//import watchSaga from "./saga";
import watchSaga from "./saga-every";


const SagaMidlleWare = createSagaMiddleware()
//应用中间件applyMiddleware
const store = createStore(reducer, applyMiddleware(SagaMidlleWare))

SagaMidlleWare.run(watchSaga) //saga任务

export default store

