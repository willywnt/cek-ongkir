export const GET_AUTH_LOGIN = 'GET_AUTH_LOGIN';
export const GET_AUTH_LOGOUT = 'GET_AUTH_LOGOUT';

export const getAuthLogin = username => ({
    type: GET_AUTH_LOGIN,
    payload: { username },
})

export const getAuthLogout = () => ({
    type: GET_AUTH_LOGOUT,
})