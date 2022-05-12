import { Theme } from '@mui/material';
import { FC, PropsWithChildren, useReducer } from 'react';
import { darkTheme } from '../../themes';
import { UiContext, uiReducer } from './';



export interface UiState {
    isMenuOpen: boolean;
    theme: Theme;
}

interface Props { }


const UI_INITIAL_STATE: UiState = {
    isMenuOpen: false,
    theme: darkTheme,

}


export const UiProvider: FC<PropsWithChildren<Props>> = ({ children }) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

    const toggleSideMenu = () => {
        dispatch({ type: '[UI] - ToggleMenu' })
    }


    const toggleTheme = () => {
        dispatch({ type: '[UI] - ToggleTheme' })
    }

    return (
        < UiContext.Provider value={{
            ...state,
            //methods
            toggleSideMenu,
            toggleTheme

        }}>
            {children}
        </ UiContext.Provider>
    )
}

