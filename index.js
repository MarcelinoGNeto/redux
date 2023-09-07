const redux = require('redux');
const createStore = redux.createStore;

//actions type
const CHANGE_USER = 'CHANGE_USER';
const LOGOUT = 'LOGOUT';

//actions
function changeUser(user) { 
    return {
        type: CHANGE_USER,
        info: 'change the current user',
        payload: user
    }
};

function logout() {
    return {
        type: LOGOUT,
        info: 'logout the current user'
    }
};

//reducers
const initialState = {
    user: '',
    isLogged: false
};

function useReducer(prevState = initialState, action) {
    switch(action.type){
        case CHANGE_USER:
            return {
                ...prevState,
                user: action.payload,
                isLogged: true
            }
        case LOGOUT:
            return {
                ...prevState,
                user: '',
                isLogged: false
            }
        default:
            return prevState
    }
}

//store

const store = createStore(useReducer)

console.log('Initial state', store.getState()); //Initial state { user: '', isLogged: false }
store.dispatch(changeUser('Marcelino'));
console.log('New state', store.getState()); //New state { user: 'Marcelino', isLogged: true }
store.dispatch(logout());
console.log('New state', store.getState()); //New state { user: '', isLogged: false }
