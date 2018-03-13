import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import Routes from './router'
import rootReducers from './reducers/index'
import './index.css'

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : f => f
// 将用户信息从session取出
// const loadState = () => {
//     const serializedState = sessionStorage.getItem('state');
//     if (serializedState === null) {
//         return undefined;
//     } else {
//         return JSON.parse(serializedState);
//     }
// }
const store = createStore(rootReducers, compose(
    applyMiddleware(thunk),
    reduxDevtools,
))
// 保存redux里的用户信息到session
const saveState = (state) => {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem('state', serializedState)
}

window.onbeforeunload = (e) => {
    const state = store.getState().auth
    saveState(state)
}

console.log('store')
console.log(store)
console.log(store.getState())

ReactDOM.render(
    <Provider store={ store }>
        <Routes/>
    </Provider>,
    document.getElementById('root')
);