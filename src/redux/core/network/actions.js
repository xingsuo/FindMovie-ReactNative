export const API_REQUEST = '[core] API Request';

export const apiRequest = (method, endpoint, getParams, postPayload, onSuccess, onError) => ({
    type: API_REQUEST,
    payload: postPayload,
    meta: { method, endpoint, getParams, onSuccess, onError },
});