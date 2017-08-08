import { combineReducers } from 'redux'

import heroesReducer from './heroesReducer'

const reducers = combineReducers({
    heroes: heroesReducer
})

export default reducers
