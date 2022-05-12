import { Grid, Typography, Card, Box, CardMedia, CardContent, Link } from '@mui/material'

import type { NextPage } from 'next'
import { useContext } from 'react'
import { MainLayout } from '../components/layouts'
import { UiContext } from '../context'
import { iconSocialMediaList } from '../data'
import { darkTheme } from '../themes'
import NextLink from 'next/link'


const HomePage: NextPage = () => {

  const { theme } = useContext(UiContext)

  return (<>

    <MainLayout title='Joni Fernández'>
      <Typography variant='h1' component='h1' color='primary'>Joni Fernández</Typography>

      {/* <Box >
        <CardContent sx={{ with: '180px' }}>
          <Card>
            <CardMedia
              component='img'
              alt=''
              image='./assets/perfil.jpg'
            />
          </Card>
        </CardContent>
      </Box> */}

      <Box
        display='flex' justifyContent='center' alignItems='center'
        border={`2px solid ${(theme === darkTheme) ? 'white' : 'turquoise'}`}
        overflow='hidden'
        borderRadius={7}
        sx={{ p: 0, m: 8 }}
      >


        <CardContent style={{ padding: 0 }} >
          <Card>
            <CardMedia

              component='img'
              alt=''
              image='./assets/concepts/concept-espacial.jpg'
            />
            <Box
              sx={{ m: 3, mt: 4, textAlign: 'center' }}
              display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
              <Typography variant='h1' component='h1'>Joni Fernández</Typography>
              <Typography variant='subtitle2' >Bienvenidos a mi web personal, esta web esta orientada a mostrar mi trabajo, habilidades conocimientos e intereses</Typography>


              <Box sx={{ mt: 2 }} display='flex'>
                <NextLink href='mailto:joni28492@gmail.com' passHref >
                  <Link display='flex'>
                    <i className="far fa-envelope" />
                    <Typography variant='body1' sx={{ ml: 1, mr: 1 }}>Joni28492@gmail.com</Typography>

                  </Link>
                </NextLink>
                <NextLink href='tel:+34647835691' passHref>
                  <Link display='flex'>
                    <i className="fas fa-mobile-alt" />
                    <Typography variant='body1' sx={{ ml: 1 }}>Telefono</Typography>
                  </Link>
                </NextLink>
              </Box>



              <Box display='flex' sx={{ mt: 3 }}>
                {

                  iconSocialMediaList.map(({ icon, url }) => (
                    <NextLink key={url} href={url} passHref>
                      <Link>
                        <i className={icon} style={{ fontSize: 25, marginLeft: 3, marginRight: 3 }} />
                      </Link>
                    </NextLink>

                  ))
                }
              </Box>

              <Typography variant='body2' color='#424242' >Por ahora esta web solo tiene visibles algunas secciones pero posteriormente irán aumentando</Typography>
            </Box>

          </Card>
        </CardContent>

      </Box>


    </MainLayout>
  </>
  )
}

export default HomePage
