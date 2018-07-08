import { 
    FETCH_NOW_PLAYING_MOVIES, 
    FETCH_NOW_PLAYING_MOVIES_SUCCESS, 
    FETCH_NOW_PLAYING_MOVIES_ERROR,
    updateNowPlaying,
} from './actions';
import { showSpinner, hideSpinner } from '../ui/actions';

import { apiRequest } from '../../core/network/actions';

export const getNowPlayingMovieFlow = ({getState, dispatch}) => next => action => {
    if (action.type === FETCH_NOW_PLAYING_MOVIES) {
        const PAGE = getState().movies.nowplaying.results.length !== 0 ? getState().movies.nowplaying.page + 1 : 1;
        dispatch(
            apiRequest('GET', 'movie/now_playing', `api_key=b56e5820da739f113efd4114a9a662a2&page=${PAGE}`,
              null, FETCH_NOW_PLAYING_MOVIES_SUCCESS, FETCH_NOW_PLAYING_MOVIES_SUCCESS));
        dispatch(showSpinner());
    } else if (action.type === FETCH_NOW_PLAYING_MOVIES_SUCCESS) {
        dispatch(updateNowPlaying(action.payload));
        dispatch(hideSpinner());
    } else if (action.type === FETCH_NOW_PLAYING_MOVIES_ERROR) {
        dispatch(hideSpinner());
    } else {
        next(action);
    }
};


const moviesMdl = [getNowPlayingMovieFlow];

export default moviesMdl;