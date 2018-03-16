import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import Routes from './router'
import App from './App'
import rootReducers from './reducers/index'
import './index.css'

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : f => f

const store = createStore(rootReducers, compose(
    applyMiddleware(thunk),
    reduxDevtools,
))

// 将用户信息从session取出
const loadState = () => {
    const serializedState = sessionStorage.getItem('state');
    if (serializedState === null) {
        return { isAuth: false, links: ['Login'] };
    } else {
        return JSON.parse(serializedState);
    }
}
// redux设置session中得到的值
store.dispatch({ type: 'SET_AUTH', auth: loadState() })

// 保存redux里的用户信息到session
const saveState = (state) => {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem('state', serializedState)
}
// 刷新事件将会保存用户信息
window.onbeforeunload = (e) => {
    const state = store.getState().auth
    saveState(state)
}

console.log('store')
console.log(store)
console.log(store.getState())

ReactDOM.render(
    <Provider store={ store }>
        <App/>
    </Provider>,
    document.getElementById('root')
);