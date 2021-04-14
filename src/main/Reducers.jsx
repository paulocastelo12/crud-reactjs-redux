import { combineReducers } from 'redux'
import UserReducers from '../components/user/reducers/UserReducers'

const rootReducer = combineReducers(
    {
        usercrud: UserReducers
    }
)

export default rootReducer