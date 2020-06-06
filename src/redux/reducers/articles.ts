import { ActionTypes } from '../ActionTypes';

export const Articles = (state = {
    error: false,
    isLoading: true,
    searchedWord: 'Slovakia',
    articlesArray : null
}, action : any) => {
    console.log(JSON.stringify(action));
    switch (action.type) {
        case ActionTypes.isLoading:
            return {...state, isLoading: true, searchedWord: action.payload};
        case ActionTypes.success:
            return {...state, articlesArray: action.payload.response.results, isLoading:false};
        case ActionTypes.error:
            return {...state, error: true};
        default:
            return state;
    }
}