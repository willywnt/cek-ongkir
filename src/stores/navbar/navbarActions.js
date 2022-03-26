export const CHANGE_VALUE = 'CHANGE_VALUE';

export const changeValue = value => ({
    type: CHANGE_VALUE,
    payload: { value },
})
