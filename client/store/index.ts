import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import dataReducer, { baseDataState } from '../interface/data/reducers';

const reducers = combineReducers({
    data: dataReducer
})

const initialState = {
    data: baseDataState
}

const store = createStore(
    reducers,
    initialState,
    applyMiddleware(thunk)
);

export default store;