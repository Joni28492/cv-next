
import { AccountCircleOutlined } from '@mui/icons-material';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import HistoryEduOutlinedIcon from '@mui/icons-material/HistoryEduOutlined';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import { Drawer, Box, List, ListItem, ListItemText, ListItemIcon, Divider, Link } from '@mui/material'
import { useContext } from 'react';
import { UiContext } from '../../context';
import { SwitchTheme } from './SwitchTheme';
import NextLink from 'next/link';
// import { UiContext } from '../../context/ui';

export const SideMenu = () => {


    const { isMenuOpen, toggleSideMenu } = useContext(UiContext)


    return (

        <Drawer
            open={isMenuOpen}
            anchor='left'
            sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
            onClose={toggleSideMenu}
        >
            <Box sx={{ width: 250, pt: 3 }} >


                <SwitchTheme />
                <Divider />

                <List>


                    <NextLink href='/' passHref>
                        <Link>
                            <ListItem >
                                <ListItemIcon>
                                    <AccountCircleOutlined />
                                </ListItemIcon>
                                <ListItemText primary='Joni Fernandez' />
                            </ListItem>

                        </Link>
                    </NextLink>



                    <NextLink href='/estudios' passHref>
                        <Link>
                            <ListItem >
                                <ListItemIcon>
                                    <MenuBookOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary='Estudios' />
                            </ListItem>
                        </Link>
                    </NextLink>

                    <NextLink href='/tecnologias' passHref>
                        <Link>
                            <ListItem >
                                <ListItemIcon>
                                    <TerminalOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary='Tecnologias' />
                            </ListItem>

                        </Link>
                    </NextLink>



                    <NextLink href='/experiencia' passHref>
                        <Link>
                            <ListItem >
                                <ListItemIcon>
                                    <WorkHistoryOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary='Experiencia' />
                            </ListItem>

                        </Link>
                    </NextLink>


                    <NextLink href='/certificados' passHref>
                        <Link>
                            <ListItem >
                                <ListItemIcon>
                                    <HistoryEduOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary='Certificados' />
                            </ListItem>

                        </Link>
                    </NextLink>

                    <NextLink href='/referentes' passHref>
                        <Link>
                            <ListItem >
                                <ListItemIcon>
                                    <HistoryEduOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary='Referentes' />
                            </ListItem>

                        </Link>
                    </NextLink>


                    <NextLink href='/proyectos' passHref>
                        <Link>
                            <ListItem >
                                <ListItemIcon>
                                    <TaskOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary='Proyectos' />
                            </ListItem>

                        </Link>
                    </NextLink>


                    <Divider />

                    <ListItem >
                        <ListItemIcon>
                            <BookOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary='Blog' />
                    </ListItem>

                    <ListItem >
                        <ListItemIcon>
                            <SchoolOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary='Tutoriales' />
                    </ListItem>







                </List>
            </Box>
        </Drawer>

    )
}
