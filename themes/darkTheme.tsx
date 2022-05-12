import { createTheme } from '@mui/material/styles';
import { indigo, grey } from '@mui/material/colors';


export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#d3d1f0'
        },
        secondary: {
            main: '##423a45'
        },
        info: {
            main: '#ad347d'
        },

    },
    components: {
        MuiLink: {
            defaultProps: {
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
                    backgroundColor: indigo[800],
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
                color: 'info',

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