
import { AppBar, Toolbar, Typography, Link, Button, Box } from '@mui/material'
import NextLink from 'next/link'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { UiContext } from '../../context';
import { useContext } from 'react';
import { SwitchTheme } from './SwitchTheme';
import { useResponsiveWidth } from '../../hooks/useResponsiveWidth';



export const Navbar = () => {

    const { toggleSideMenu } = useContext(UiContext)



    return (
        // TODO.: contex para el color background #4f1638, turquesa para light  
        <AppBar>

            <Toolbar color='info'>
                <NextLink href='/' passHref>
                    <Link>
                        <Typography variant='h6' color='primary'>Joni Fernández  </Typography>

                    </Link>
                </NextLink>
                <Box flex={1} />



                <Box sx={{ display: 'flex', justifyContent: 'space-evenly', width: '50vw' }}>
                    <NextLink href='/programacion' passHref>
                        <Link>
                            <Typography color='primary'> Dev </Typography>
                        </Link>
                    </NextLink>

                    <NextLink href='/proyectos/3d' passHref>
                        <Link>
                            <Typography color='primary'> 3D </Typography>
                        </Link>
                    </NextLink>

                    <NextLink href='/pentesting' passHref>
                        <Link>
                            <Typography color='primary'> Hack </Typography>
                        </Link>
                    </NextLink>
                </Box>

                <Box flex={1} />

                <Button onClick={toggleSideMenu} variant='text' color='primary' >
                    <MenuOutlinedIcon />
                </Button>

                {/* <SwitchTheme /> */}

            </Toolbar>
        </AppBar>
    )
}
