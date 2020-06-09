import { ActionTypes } from "../ActionTypes";

export const Articles = (
  state = {
    error: false,
    isLoading: true,
    searchedWord: "Slovakia",
    articlesArray: null,
    currentPage: 0,
    totalPages: 0,
  },
  action: any
) => {
  switch (action.type) {
    case ActionTypes.isLoading:
      return { ...state, isLoading: true, searchedWord: action.payload };
    case ActionTypes.success:
      return {
        ...state,
        articlesArray: action.payload.response.results,
        isLoading: false,
        currentPage: action.payload.response.currentPage,
        totalPages: action.payload.response.pages
      };
    case ActionTypes.error:
      return { ...state, error: true };
    default:
      return state;
  }
};
