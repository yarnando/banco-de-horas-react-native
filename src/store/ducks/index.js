import { combineReducers } from 'redux'
import { navReducer } from '../../routes'

import global from './_global'
import auth from './auth'
import comptime from './comptime'

export default combineReducers({
    global,
    auth,
    comptime,
    nav: navReducer
})