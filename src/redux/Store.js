import { combineReducers, compose, createStore, applyMiddleware } from 'redux';

import ui from './app/ui/reducers';
import movies from './app/movies/reducers';

import apiMdl from './core/network/middleware';
import moviesMdl from './app/movies/middleware';

const appReducer = combineReducers({
    ui,
    movies
});

const logger = (store) => (next) => (action) => {
    console.log("action fired", action);
    next(action);
    console.log(store.getState());
};


const middleware = applyMiddleware(logger, ...moviesMdl, apiMdl);


const store = createStore(
    appReducer,
    compose(
      middleware,
    ),
  );


export default store;