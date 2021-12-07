import { getSortedFilteredFilms, deleteMovies, getSearchMovies } from "../services/movieService";
import { FETCH_MOVIES, FILTER_MOVIES, SORT_MOVIES, SELECT_MOVIE } from "./actionTypes";

export const fetchMovies = (filter='', sortOrder='') => {
  return async dispatch => {
    const data = await getSortedFilteredFilms(filter, sortOrder);
    console.log(data, 'aaaaa')
    dispatch({type: FETCH_MOVIES, payload: data});
  }
};

export const filterMovies = (filter) => {
  return {
    type: FILTER_MOVIES, 
    payload: filter
  }
};

export const sortMovies = (sortOrder) => {
  return {
    type: SORT_MOVIES, 
    payload: sortOrder
  }
};

export const selectMovie = (id) => {
  return {
    type: SELECT_MOVIE,
    payload: id
  }
};

export const deleteMovie = (id, filter='', sortOrder='') => {
  return (dispatch) => {
    deleteMovies(id)
    .then(() => dispatch(fetchMovies(filter, sortOrder)));
  }
};

export const searchMovie = (search) => {
  return async (dispatch) => {
    const searchData = await getSearchMovies(search);
    console.log(searchData)
    dispatch({type: FETCH_MOVIES, payload: searchData});
  }
};