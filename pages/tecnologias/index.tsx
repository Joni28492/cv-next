import React from 'react'
import { MainLayout } from '../../components/layouts'
import { Box, Grid, Typography, } from '@mui/material';
import { iconProgrammingList } from '../../data';
const tecnologiasPage = () => {
    return (
        <MainLayout title='Tecnologias'>


            <Grid container sx={{ mt: 15 }} display='flex' justifyContent='space-evenly' alignItems='center'
                flexWrap='wrap'>
                {
                    iconProgrammingList.map(({ legend, color, icon }) => (
                        <Box key={icon} display='flex' flexDirection='column' alignItems='center'
                            sx={{ ml: 2, mr: 2 }}
                        >
                            <i className={`fa-brands fa-${icon}`} style={{ color, fontSize: 45 }} />
                            <Typography variant='subtitle1'>{legend} </Typography>
                        </Box>
                    ))
                }






            </Grid>
        </MainLayout>
    )
}

export default tecnologiasPage