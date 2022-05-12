import { Grid, Box } from '@mui/material'
import React from 'react'
import { MainLayout } from '../../../components/layouts'
import { CardForThreeDPage } from '../../../components/ui/CardForThreeDPage'
import { imgList } from '../../../data'
import DoubleArrowOutlinedIcon from '@mui/icons-material/DoubleArrowOutlined';
import { usePage } from '../../../hooks/usePage';




const threeDPage = () => {

    const { info, handleNext, handlePrevious, Component: CardForThreeD } = usePage(imgList, CardForThreeDPage);

    return (
        <MainLayout title='Proyectos 3d'>
            <Grid container sx={{ mt: 10 }} display='flex' alignItems='center' justifyContent='center'>


                <DoubleArrowOutlinedIcon
                    onClick={handlePrevious}
                    sx={{ transform: 'rotate(180deg)', fontSize: 85 }} />
                <CardForThreeD img={info} />
                <DoubleArrowOutlinedIcon
                    onClick={handleNext}
                    sx={{ fontSize: 85 }} />

                {/* {
                        imgList.map((img, i) => (
                            <CardForThreeDPage key={i} img={img} />
                        ))
                } */}

            </Grid>

        </MainLayout>
    )
}

export default threeDPage