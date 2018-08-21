import types from './types';
import themes from '../themes';
const defaultTheme = 'light';

export const setTheme = (themeName = defaultTheme) => {
    let theme = themes[themeName];

    if(!theme){
        theme = themes[defaultTheme];
        themeName = defaultTheme;
    }

    // localStorage.setItem('theme', themeName);

    localStorage.theme = themeName;

    return {
        type: types.SET_THEME, // 'set_theme'
        themeName: themeName, // 'light'
        theme: theme // {text: 'black-text',nav: 'grey lighten-4',accent: 'grey',main: 'grey lighten-2'}
    }
}
