import { Typography, Divider, Box, Grid, CardMedia, Card, CardContent } from '@mui/material';
import React from 'react'
import { MainLayout } from '../../components/layouts/MainLayout';
import { certificados } from '../../data';

const certificadosPage = () => {
    return (
        <MainLayout title='Certificados' >


            <Grid container sx={{ mt: 10, pl: 2, pr: 2 }} justifyContent='center' alignItems='center'>
                <Box>
                    <Typography variant='h1' component='h1'>Certificados</Typography>
                    <Divider />
                </Box>

                <Grid container display='flex' flexDirection='column' alignItems='center' sx={{ mt: 2 }}>



                    {
                        certificados.map(({ img, title, teacher }) => (
                            <Card key={img}>
                                <CardContent sx={{ width: '65vw', mt: 2 }}>
                                    <CardMedia
                                        component='img'
                                        alt=''
                                        image={img}
                                    />
                                    {/* <Typography variant='h3' component='h3'>{title}</Typography>
                                    <Typography variant='subtitle1'>{teacher}</Typography> */}
                                </CardContent>
                            </Card>
                        ))
                    }


                </Grid>


            </Grid>

        </MainLayout>
    )
}

export default certificadosPage