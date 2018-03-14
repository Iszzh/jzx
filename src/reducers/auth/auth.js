import { login, getCurrentUser } from "@/api/auth/login";
import { setCookie, Token } from "@/utils/cookie";
import { message } from 'antd';

const IS_LOGIN = "IS_LOGIN"
const LOGOUT = "LOGOUT"
const GET_LINK = 'GET_LINK'
const SET_AUTH = "SET_AUTH"
const GET_AUTH = "GET_AUTH"
const SET_USER_INFO = "SET_USER_INFO"
const GET_USER_INFO = "GET_USER_INFO"

let link = ['Login']
let initState = {
    isAuth: false,
    links: link,
    userInfo: {},
}

export default function auth(state = initState, action) {
    switch (action.type) {
        case IS_LOGIN:
            // 是否登录
            return { ...state, isAuth: true }
        case LOGOUT:
            // 注销
            return { ...state, isAuth: false, links: link }
        case GET_LINK:
            // 设置链接
            return { ...state, links: ['Login', 'Index', 'Register'] }
        case SET_AUTH:
            // 设置用户权限
            return { ...action.auth }
        case GET_AUTH:
            // 获取用户权限
            return { ...state }
        case SET_USER_INFO:
            return { userInfo: action.user }
        case GET_USER_INFO:
            return { ...state }
        default:
            return state
    }
}

export const toLogin = (info) => {
    return { type: IS_LOGIN, info }
}

export const logOut = () => {
    return { type: LOGOUT }
}

export const getLink = (data) => {
    return dispatch => {
        login(data.userName, data.password).then(res => {
            console.log(res)
            let { msg, code, data } = res
            if (code === 200) {
                setCookie(Token, data.token)
                getCurrentUser().then(response => {
                    let link = JSON.parse(JSON.stringify(response.data.permissionCodes))
                    let links = ['Login']
                    link.map(m => {
                        if (m.indexOf(':') < 0) {
                            links.push(m)
                        }
                    })
                    console.log(links)
                    dispatch({ type: SET_AUTH, auth: { isAuth: true, links: links } })
                    // dispatch({ type: SET_USER_INFO, userInfo: response.data })
                })
                // dispatch({ type: IS_LOGIN })
            } else {
                message.error(msg)
            }
        })
    }
}

export const setAuth = (auth) => {
    return { type: SET_AUTH, auth }
}

export const setUserInfo = (user) => {
    return { type: SET_USER_INFO, user }
}

export const getUserInfo = () => {
    return { type: GET_USER_INFO }
}