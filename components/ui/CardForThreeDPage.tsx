import React, { FC } from 'react';
import { Card, CardContent, CardMedia } from '@mui/material'

export interface ITrheeDCard {
    img: string,
    width?: number | string
}

export const CardForThreeDPage: FC<ITrheeDCard> = ({ img, width = '40vw' }) => {
    return (
        <Card >
            <CardContent sx={{ width }}>
                <CardMedia
                    component='img'
                    alt=''
                    image={`../.${img}`}
                />
            </CardContent>
        </Card>
    )
}
