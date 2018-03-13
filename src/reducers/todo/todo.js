const ADD_LIST = 'ADD_LIST'
const GET_LIST = 'GET_LIST'

const initState = {
    content: []
}

export default function (state = initState, action) {
    switch (action.type) {
        case ADD_LIST:
            return { content: [...state.content, action.add] }
        case GET_LIST:
            return { ...state }
        default:
            return state
    }
}

export const addList = (add) => {
    return { type: ADD_LIST, add }
}

export const getList = (get) => {
    return { type: GET_LIST, get }
}