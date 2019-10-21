import { combineReducers } from 'redux'
import { navReducer } from '../../routes'

import global from './global'
import todos from './todos'

export default combineReducers({
    global,
    todos,
    nav: navReducer
})