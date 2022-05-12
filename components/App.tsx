import { ThemeProvider } from '@mui/material'

import { darkTheme } from '../themes';
import { FC, useContext, PropsWithChildren } from 'react';
import { UiContext } from '../context/ui/UiContext';



interface Props { }

export const App: FC<PropsWithChildren<Props>> = ({ children }) => {


    const { theme } = useContext(UiContext)

    return (

        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>


    )
}


