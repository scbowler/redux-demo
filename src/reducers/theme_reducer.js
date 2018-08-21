import types from '../actions/types';

const DEFAULT_STATE = {
    themeName: '',
    theme: {},
    name: 'Bob',
    health: 'Fair'
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.SET_THEME:
            return {...state, themeName: action.themeName, theme: action.theme };
        default:
            return state;
    }
}
