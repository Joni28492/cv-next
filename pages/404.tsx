import React from 'react'
import { MainLayout } from '../components/layouts'
import { Box, CardMedia, Typography, Grid } from '@mui/material'


const notFoundPage = () => {
    return (
        <MainLayout title='pagina no encontrada'>

            <Grid container display='flex' justifyContent='center' alignItems='center' textAlign='center'>
                <Box sx={{ mt: 15, width: 550, display: 'flex', flexDirection: 'row' }}  >


                    <CardMedia
                        sx={{ borderRadius: '50%' }}
                        component='img'
                        alt=''
                        image='./assets/3d/pelo/monstruosa.jpg'
                    />

                    <Box display='flex' flexDirection='column'>
                        <Typography
                            sx={{ fontSize: 32 }}
                            variant='subtitle1'
                        >Página no encontrada</Typography>
                        <Typography sx={{ fontSize: 120 }} color='slategrey' variant='h1' component='h1'>404</Typography>
                    </Box>


                </Box>

            </Grid>

        </MainLayout>
    )
}

export default notFoundPage