export default {
    primary: '#fc5c65',
    secondary: '#4ecdc4',
    black: '#000',
    white: '#fff',
    medium: '#6e6969',
    light: '#f8f4f4',
    danger: '#ff5252',
    dark: '#0c0c0c',
    green: '#4ecdc4',
};

interface ThemeI {
    colors: {
        primary: string;
        secondary: string;
        black: string;
        white: string;
        medium: string;
        light: string;
        danger: string;
        dark: string;
        green: string;
    },
    fonts: { material: string; default: string; }

}

export const theme:
    ThemeI = {
    colors: {
        primary: '#fc5c65',
        secondary: '#4ecdc4',
        black: '#000',
        white: '#fff',
        medium: '#6e6969',
        light: '#f8f4f4',
        danger: '#ff5252',
        dark: '#0c0c0c',
        green: '#4ecdc4'
    },
    fonts: {
        material: "Roboto",
        default: "Montserrat",
    },
};