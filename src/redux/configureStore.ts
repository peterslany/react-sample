import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk  from 'redux-thunk';
import { Articles } from './reducers/articles';

export const ConfigureStore = () => {
    const store = createStore( // kombinovanie roznych reducers do jedneho store
        combineReducers({
            articles: Articles,
        }),
        applyMiddleware(thunk)
    );
    
    return store;
}