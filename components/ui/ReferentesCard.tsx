import React, { FC } from 'react'
import { IReferentes } from '../../data/referentes'
import NextLink from 'next/link';
import { Card, CardMedia, Box, Typography, Link } from '@mui/material';


export const ReferentesCard: FC<IReferentes> = ({ nombre, img = './no-img-perfil.jpg', especialidad, desc, web, icon = 'fa-solid fa-link-simple', className }) => {





    return (
        <Card
            className={className}
            style={{
                margin: '12px',
                width: '500px',
                padding: '15px',
                border: '1px solid gray',
                borderRadius: '25px',
                display: 'flex',
                flexDirection: 'row'
            }}>
            <CardMedia
                sx={{ borderRadius: 150, width: 120, height: 120, border: '3px solid turquoise' }}

                component='img'
                alt=''
                image={img}
            />

            <Box sx={{ ml: 10 }}>

                <Typography variant='h3' component='h4'>{nombre}</Typography>


                <Box display='flex' flexDirection='row' justifyContent='space-arround' >
                    <Typography variant='subtitle1'>{especialidad}</Typography>

                    <NextLink href={web} passHref>
                        <Link sx={{ ml: 1 }}>
                            <i className={icon} />
                        </Link>
                    </NextLink>
                </Box>
                <Typography variant='body1'>{desc}</Typography>
            </Box>
        </Card>
    )
}
