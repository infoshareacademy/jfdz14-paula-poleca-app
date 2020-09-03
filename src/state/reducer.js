// INITIAL STATE
const initialState = 'https://img.pngio.com/user-logo-png-user-computer-icons-clipart-download-800-800-user-logo-png-900_800.png';

// ACTIONS
const ADD_AVATAR = 'ADD_AVATAR';

// REDUCER
export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_AVATAR:
            const newState = action.payload;
            state = newState;
            return state;
        default:
            return state;
    }
}

// ACTION CREATORS
export const addAvatar = (value) => ({ type: ADD_AVATAR, payload: value});

