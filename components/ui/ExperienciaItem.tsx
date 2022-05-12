interface Props {
    color?: string,
    year: string,
    title: string,
    company: string,
    more?: string,
    delay?: string
}

import { Box, Typography } from '@mui/material'


export const ExperienciaItem = ({ color = 'red', year = '2020-2021', title = 'titulo', company = 'compañia', more = 'lorem' }) => {
    return (
        <Box style={{
            margin: '5px',
            border: `2px solid ${color}`,
            width: '420px',
            height: '180px',
            borderRadius: '20px',
            overflow: 'hidden'
        }}>

            <header style={{
                margin: 0,
                padding: 0,
                backgroundColor: `${color}`,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <Typography variant='h3' sx={{ ml: '12px' }}>{title}</Typography>
                <span style={{ marginRight: '12px' }}>{year}</span>
            </header>
            <Typography variant='body1' style={{ margin: '12px' }}>{more}</Typography>
        </Box>
    )
}