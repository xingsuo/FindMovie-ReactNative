import { API_REQUEST } from './actions';
import { MovieDB_Read_Access_Token, MovieDB_Api_Key, BaseURL } from './constants';

const apiMdl = ({dispatch, getState}) => next => action => {
    if(action.type === API_REQUEST) {
        const { method, endpoint, getParams, onSuccess, onError } = action.meta;
        const url = `${BaseURL}${endpoint}?${getParams}`;
        const opt = {
            method: method.toUpperCase(),
        };
        fetch(url, opt)
        .then(response => response.json())
        .then(data => dispatch({ type: onSuccess, payload: data }))
        .catch(error => dispatch({ type: onError, payload: error }));
    } else {
        next(action);
    }
}


export default apiMdl;