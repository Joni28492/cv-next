import React from 'react'
import { MainLayout } from '../../components/layouts'
import { ExperienciaItem } from '../../components/ui/ExperienciaItem'
import { experienciaListItmes } from '../../data'
import { Grid } from '@mui/material'

const experienciaPage = () => {
    return (
        <MainLayout title='Experiencia'>

            <Grid container sx={{ mt: 12 }} display='flex' alignItems='center' justifyContent='center' flexWrap='wrap'>
                {
                    experienciaListItmes.map(({ color, year, title, company, more }, i) => (
                        <ExperienciaItem
                            key={i}
                            color={color}
                            year={year}
                            title={title}
                            company={company}
                            more={more}
                        />

                    ))
                }

            </Grid>


        </MainLayout>
    )
}

export default experienciaPage