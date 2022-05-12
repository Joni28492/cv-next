import { createTheme } from '@mui/material/styles';
import { teal } from '@mui/material/colors';


export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#f0f0f0'
        },
        secondary: {
            main: '#3A64D8'
        },
        info: {
            main: '#fff'
        }
    },
    components: {
        MuiLink: {
            defaultProps: {
                color: 'black',
                underline: 'none',
            },
        },
        MuiAppBar: {
            defaultProps: {
                elevation: 0,
                position: 'fixed',
            },
            styleOverrides: {
                root: {
                    backgroundColor: teal[500],
                    height: 60
                },
            }
        },

        MuiTypography: {
            styleOverrides: {
                h1: {
                    fontSize: 30,
                    fontWeight: 600
                },
                h2: {
                    fontSize: 20,
                    fontWeight: 400
                },
                h3: {
                    fontSize: 18,
                    fontWeight: 300
                },
                subtitle1: {
                    fontSize: 18,
                    fontWeight: 600
                },
                subtitle2: {
                    fontSize: 14,
                    fontWeight: 200
                },
                body1: {
                    fontSize: 14,
                    fontWeight: 200
                },
                body2: {

                    fontSize: 14,
                    fontWeight: 200
                },
            }
        },


        MuiButton: {
            defaultProps: {
                variant: 'contained',
                size: 'small',
                disableElevation: true,
                color: 'info'
            },
            styleOverrides: {
                root: {

                    textTransform: 'none',
                    boxShadow: 'none',
                    borderRadius: 10,
                    ":hover": {
                        backgroundColor: 'rgba(0,0,0,0.05)',
                        transition: 'all 0.3s ease-in-out'
                    }
                }
            }
        },


        MuiCard: {
            defaultProps: {
                elevation: 0
            },
            styleOverrides: {
                root: {
                    boxShadow: '0px 5px 5px rgba(0,0,0,0.05)',
                    borderRadius: '10px',
                }
            }
        }

    }
});