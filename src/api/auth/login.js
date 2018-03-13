import fetch from '@/api'

export function login(name, pwd) {
    const data = { userName: name, pwd }
    return fetch({
        method: 'post',
        url: '/userAccounts/auth',
        data,
    })
}

export const getCurrentUser = () => {
    return fetch({
        method: 'GET',
        url: '/persons/current/person'
    })
}