import { UPDATE_NOW_PLAYING_MOVIES } from './actions';
const INITIAL_STATE = {
  nowplaying: {
    results: [],
  },
};

function moviesReducer(movies = INITIAL_STATE, action) {
    switch (action.type) {
      case UPDATE_NOW_PLAYING_MOVIES:
        return {...movies, nowplaying: {...action.payload, results: [...movies.nowplaying.results, ...action.payload.results]} };
      default:
        return movies;
    }
  }
  
  export default moviesReducer;