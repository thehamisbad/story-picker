import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import dataReducer, { baseDataState } from '../interface/data/reducers';
import randomReducer, { baseRandomState } from '../interface/randomize/reducers';

const reducers = combineReducers({
    data: dataReducer,
    random: randomReducer,
})

const initialState = {
    data: baseDataState,
    random: baseRandomState
}

const store = createStore(
    reducers,
    initialState,
    applyMiddleware(thunk)
);

export default store;