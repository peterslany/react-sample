import { ActionTypes } from "./ActionTypes";

export const fetchArticles = (query: string, page: number) => async (
  dispatch: any
) => {
  dispatch(articlesAreLoading(query));
  await fetch("https://peterslany.herokuapp.com/articles?q=" + query + "&page=" + page)
    .then(async (response) => {
      if (!response.ok) {
        dispatch(articlesLoadingError());
        console.log(new Error("Invalid response from server!"));
      } else {
        const newPayld = await response.json();
        return newPayld;
      }
    })
    .then((payload) => {
      dispatch(articlesLoadingSucces(payload));
    })
    .catch((error) => {
      dispatch(articlesLoadingError());
      console.log(error);
    });
};

export const articlesLoadingSucces = (response) => ({
  type: ActionTypes.success,
  payload: response,
});

export const articlesLoadingError = () => ({
  type: ActionTypes.error,
});
export const articlesAreLoading = (query) => ({
  type: ActionTypes.isLoading,
  payload: query,
});
