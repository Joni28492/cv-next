import { Card, Typography } from '@mui/material';
import { FC } from 'react';
import { IStudies } from '../../data';

export const StudyCard: FC<IStudies> = ({ title, place, date, work, className }) => {
    return (
        <Card elevation={3} sx={{ p: 3, m: 2 }} className={className}>
            <Typography variant='h3' component='h3'>{title}</Typography>
            <Typography variant='subtitle1'>{place}</Typography>
            <Typography variant='body1'>{date}</Typography>
            <Typography variant='body2'>{work}</Typography>
        </Card>
    )
}
