export const MOVIES = '[MOVIES]';

export const NOW_PLAYING = '[Now Playing]';
export const FETCH_NOW_PLAYING_MOVIES = `${MOVIES} ${NOW_PLAYING} Fetch`;
export const FETCH_NOW_PLAYING_MOVIES_SUCCESS = `${MOVIES} ${NOW_PLAYING} Fetch Success`;
export const FETCH_NOW_PLAYING_MOVIES_ERROR = `${MOVIES} ${NOW_PLAYING} Fetch Error`;
export const UPDATE_NOW_PLAYING_MOVIES = `${MOVIES} ${NOW_PLAYING} Update`;
export const LOAD_MORE_NOW_PLAYING_MOVIES = `${MOVIES} ${NOW_PLAYING} Load more`;

export const fetchNowPlaying = () => ({
    type: FETCH_NOW_PLAYING_MOVIES,
});

export const updateNowPlaying = data => ({
    type: UPDATE_NOW_PLAYING_MOVIES,
    payload: data,
});

export const loadMoreNowPlaying = () => ({
    type: LOAD_MORE_NOW_PLAYING_MOVIES,
});