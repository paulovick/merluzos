import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { mapReducer, filterReducer, screenReducer } from '../reducers'

const rootReducer = combineReducers({
    screen: screenReducer,
    map: mapReducer,
    filter: filterReducer
})

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

export { store }