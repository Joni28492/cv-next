import React, { useState } from 'react'
import { MainLayout } from '../../components/layouts';
import { Grid, Button, Box } from '@mui/material';
import { estudios } from '../../data';
import { StudyCard } from '../../components/ui';

const estudiosPage = () => {

    const [reverse, setReverse] = useState(false)

    return (
        <MainLayout title='Estudios'>
            <Box sx={{ mt: 10 }} display='flex' justifyContent='center' alignItems='center'>
                <Button
                    className='animate__animated animate__tada'
                    onClick={() => setReverse(!reverse)} size='large'>Invertir Orden</Button>
            </Box>
            <Grid container sx={{ mt: 2 }} display='flex'
                flexDirection={`${(reverse) ? 'column-reverse' : 'column'}`}
                alignItems='center'>

                {
                    estudios.map(({ title, place, date, work, className }) => (
                        <StudyCard
                            key={title}
                            className='animate__animated animate__backInLeft'
                            title={title}
                            place={place}
                            date={date}
                            work={work}
                        />
                    ))
                }

            </Grid>
        </MainLayout>
    )
}

export default estudiosPage