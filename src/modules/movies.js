// Actions
 const ActionType = {
  ADD_MOVIE: "ADD_MOVIE",
  SET_MOVIES: "SET_MOVIES",
  DELETE_MOVIE: "DELETE_MOVIE",
  EDIT_MOVIE: "EDIT_MOVIE",
  SET_ACTIVE_MOVIE: "SET_ACTIVE_MOVIE",
  FILTER_MOVIES: "FILTER_MOVIES",
  GET_BY_ID: "GET_BY_ID"
};

// Action Creators
export function setMovies(payload) {
  return { type: ActionType.SET_MOVIES, payload };
}

export function setActiveMovie(id) {
  return { type: ActionType.SET_ACTIVE_MOVIE, payload: id };
}

export function addMovie(movies) {
  return { type: ActionType.ADD_MOVIE, payload: movies };
}

export function filterMovie(genre) {
  return { type: ActionType.FILTER_MOVIES, payload: genre };
}

export function deleteMovie(payload) {
  return { type: ActionType.DELETE_MOVIE, payload };
}

export function editMovie(payload) {
  return { type: ActionType.EDIT_MOVIE, payload };
}

export function getMovieById(payload) {
  return { type: ActionType.GET_BY_ID, payload };
}

// Async Actions
export function fetchMovies() {
  return dispatch => {
    return fetch("http://localhost:4000/movies")
      .then(res => res.json())
      .then(movies => dispatch(setMovies(movies.data)));
  };
}

// Initial state
const INITIAL_STATE = {
  movieList: [],
  activeMovie: null
};

// Reducer
export function moviesReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case ActionType.SET_MOVIES:
    case ActionType.ADD_MOVIE:
    case ActionType.DELETE_MOVIE:
      return {
        ...state,
        movieList: action.payload
      };
    case ActionType.SET_ACTIVE_MOVIE:
      return {
        ...state,
        activeMovie: state.movieList.find(m => m.id === action.payload)
      };
    case ActionType.EDIT_MOVIE:
      return {
        ...state,
        movieList: state.movieList.map(
          m => (m.id === action.payload.id ? action.payload : m)
        )
      };
    default:
      return state;
  }
}
