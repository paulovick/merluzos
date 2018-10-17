import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { mapReducer, filterReducer } from '../reducers'

const rootReducer = combineReducers({
    map: mapReducer,
    filter: filterReducer
})

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

export { store }