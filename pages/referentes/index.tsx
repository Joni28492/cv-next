import React from 'react'
import { MainLayout } from '../../components/layouts'
import { Grid } from '@mui/material';
import { referentes } from '../../data/referentes';
import { ReferentesCard } from '../../components/ui';


const referentesPage = () => {



    return (
        <MainLayout title='referentes'>
            <Grid container sx={{ pt: '100px' }} display='flex' flexWrap='wrap' justifyContent='center' alignItems='center'>

                {
                    referentes.map(({ nombre, img, especialidad, desc, web, icon }, i) => (
                        <ReferentesCard
                            key={web}
                            nombre={nombre}
                            img={img}
                            especialidad={especialidad}
                            desc={desc}
                            web={web}
                            icon={icon}
                        />
                    ))
                }

            </Grid>

        </MainLayout>
    )
}

export default referentesPage