import { Theme } from '@mui/material';
import { createContext } from 'react'
import { darkTheme } from '../../themes/darkTheme';


interface ContextProps {
    isMenuOpen: boolean;
    theme: Theme;
    toggleSideMenu: () => void;
    toggleTheme: () => void;

}


export const UiContext = createContext({} as ContextProps)