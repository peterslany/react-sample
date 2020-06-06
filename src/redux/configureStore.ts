import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk  from 'redux-thunk';
import logger from 'redux-logger';
import { Articles } from './reducers/articles';

export const ConfigureStore = () => {
    const store = createStore( // kombinovanie roznych reducers do jedneho store
        combineReducers({
            articles: Articles,
        }),
        applyMiddleware(thunk, logger)
    );
    
    return store;
}