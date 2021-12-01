import movieReducer, { initialState } from './movieReducer';
import { FILTER_MOVIES, FETCH_MOVIES, SELECT_MOVIE } from './actionTypes';

describe('movie reducer', () => { 

    test('initial state', () => {
        expect(movieReducer(undefined, {filter: ''})).toEqual(initialState);
    });
  
    test('FILTER_MOVIES', () => {
      
      expect(movieReducer(initialState.filter, {
        type: FILTER_MOVIES,
        payload: 'filter'
      })).toEqual({
        filter: 'filter'
      });
    });

    test('FETCH_MOVIES', () => {
      
      expect(movieReducer(initialState.fetchedMovies, {
        type: FETCH_MOVIES,
        payload: [{
          a: 1,
          b: 2
        }]
      })).toEqual({
        fetchedMovies: [{
          a: 1,
          b: 2
        }]
      });
    });

    test('SELECT_MOVIE', () => {
      
      expect(movieReducer(initialState.selectedMovie, {
        type: SELECT_MOVIE,
        payload: 13213
      })).toEqual({
        selectedMovie: 13213
      });
    });
  })