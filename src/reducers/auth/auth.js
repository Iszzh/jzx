import { login,getCurrentUser } from "@/api/auth/login";
import { setCookie, Token } from "@/utils/cookie";
import { message } from 'antd';

const IS_LOGIN = "IS_LOGIN"
const LOGOUT = "LOGOUT"
const GET_LINK = 'GET_LINK'
const SET_AUTH = "SET_AUTH"

let link = ['Login']
let initState = {
    isAuth: false,
    links: link,
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
            return { ...state, links: ['Login', 'Index', 'Register'] }
        case SET_AUTH:
            return { ...action.auth }
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
                getCurrentUser().then(response=>{

                })
                dispatch({ type: IS_LOGIN })
            } else {
                message.error(msg)
            }
        })
    }
}

export const setAuth = (auth) => {
    return { type: SET_AUTH, auth }
}