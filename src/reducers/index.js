import { combineReducers } from 'redux'
import gunReducers from './add/counter'
import auth from './auth/auth'
import todo from './todo/todo'

const rootReducers = combineReducers({
    gunReducers, auth, todo
})
export default rootReducers