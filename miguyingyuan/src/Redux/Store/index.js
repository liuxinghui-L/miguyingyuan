import {createStore} from "redux";
import {reducer,reducer2,reducer3,reducer4,reducer5} from "../Reducer";
import {combineReducers} from "redux";

import thunk from 'redux-thunk';//引入中间件 做异步请求
import {applyMiddleware} from "redux";

import promiseMiddleware from 'redux-promise';


const myreducer = combineReducers({
	changeListReducer:reducer,
	changeList2Reducer:reducer2,
	changeList3Reducer:reducer3,
	changeList4Reducer:reducer4,
	changeList5Reducer:reducer5
})


const store = createStore(myreducer,applyMiddleware(thunk,promiseMiddleware));



export default store;