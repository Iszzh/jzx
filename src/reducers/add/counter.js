// action types
const ADD_GUN = 'ADD_GUN'
const MINUS_GUN = 'MINUS_GUN'
const ADD_TIME='ADD_TIME'
// reducer
export default function (state, action) {
    if (!state) {
        state = {num: 10}
    }
    switch (action.type) {
        case ADD_GUN:
            // 加机关枪
            return {num: state.num+1}
        case MINUS_GUN:
            // 减机关枪
            return {num: state.num-1}
        case ADD_TIME:

            return
        default:
            return state
    }
}

// action creators
export const addGuns = (add) => {
    return {type: ADD_GUN, add}
}

export const minusGuns = (minus) => {
    return {type: MINUS_GUN, minus}
}

export const addTime =(time)=>{
    return dispatch=>{
        setTimeout(()=>{
            dispatch(addGuns(time))
        },3000)
    }
}