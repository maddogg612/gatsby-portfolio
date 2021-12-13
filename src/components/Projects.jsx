import React from 'react';
import Pupperly from '../images/Project/pupperly.png'
import HateIt from '../images/Project/hateit.png'
import NTheLoop from '../images/Project/intheloop.png'
import Devaltio from '../images/Project/devaltio.png'
import After from '../images/Project/after.png'
import { Container, Grid, Button, CardMedia, Typography, CardContent, CardActions, Card, Link } from '@mui/material';


const Projects = () => {
  return (
      <Container sx={{ padding: '20px', margin: '10px auto'}} id="projects">
        
        <Grid sx={{display: 'flex', justifyContent: 'center'}} container spacing={4} gap={2}>

          <Grid xs={12} md={8}>
            <Card sx={{height:'100%', display: 'flex', flexDirection: 'column'}}>
            <Typography variant='h5' component='h2' align='center' sx={{p:1}}>deValtio</Typography>
              <CardMedia component='img' sx={{p:1}} image={Devaltio} alt='hateit homepage' height="95%" width="95%"/>
              <CardContent align="center">
              <Typography variant='body1'>deValtio is a chrome development tool used for visualizing and debugging React applications that use the state management library Valtio</Typography>
              <Typography variant='body2'>Tools Used: React | Typescript | Chrome API | Valtio</Typography>
              </CardContent>
              <CardActions sx={{display: 'flex', justifyContent: 'center'}}>
              <Link underline='none' href="http://www.devaltio.io/" target="_blank"><Button variant="contained" size='small'>Check it out</Button></Link>
                <Link underline='none' href="https://github.com/oslabs-beta/deValtio" target="_blank"><Button variant="contained" size='small'>Source Code</Button></Link>
              </CardActions>
            </Card>
          </Grid>

          <Grid xs={12} md={8}>
            <Card sx={{height:'100%', display: 'flex', flexDirection: 'column'}}>
            <Typography variant='h5' component='h2' align='center' sx={{p:1}}>Pupperly</Typography>
              <CardMedia component='img' sx={{p:1}} image={Pupperly} alt='pupperly homepage' height="95%" width="95%"/>
              <CardContent align='center'>
              <Typography variant='body1'>Pupperly is a deployed web application that allows pet owners to aggregrate all their veterinary records in one easy to access place for pet related services or clinic changes.</Typography>
              <Typography variant='body2'>Tools Used: NextJS | Material UI | Hasura | Netlify</Typography>
              </CardContent>
              <CardActions sx={{display: 'flex', justifyContent: 'center'}}>
              <Link underline='none' href="https://pupperly.netlify.app/" target="_blank"><Button variant="contained" size='small'>Check it out</Button></Link>
              <Link underline='none' href="https://github.com/PupperlyDevTeam/pupperly" target="_blank"><Button variant="contained" size='small'>Source Code</Button></Link>
              </CardActions>
            </Card>
          </Grid>

          <Grid xs={12} md={8}>
            <Card sx={{height:'100%', display: 'flex', flexDirection: 'column'}}>
            <Typography variant='h5' component='h2' align='center' sx={{p:1}}>In The Loop</Typography>
              <CardMedia component='img' sx={{p:1}} image={NTheLoop} alt='in the loop homepage' height="95%" width="95%"/>
              <CardContent align='center'>
              <Typography variant='body1'>In the Loop is a web applications that allow you to find local concerts, see a music video by the band and purchasing your tickets through Ticketmaster.</Typography>
              <Typography variant='body2'>Tools Used: React | Chakra UI | MongoDB</Typography>
              </CardContent>
              <CardActions sx={{display: 'flex', justifyContent: 'center'}}>
              <Link underline='none'><Button variant="contained" size='small' disabled='true'>pending</Button></Link>
              <Link underline='none' href="https://github.com/in-the-loop-iteration/scratch-concert-finder" target="_blank"><Button variant="contained" size='small'>Source Code</Button></Link>
              </CardActions>
            </Card>
          </Grid>

          <Grid xs={12} md={8}>
            <Card sx={{height:'100%', display: 'flex', flexDirection: 'column'}}>
            <Typography variant='h5' component='h2' align='center' sx={{p:1}}>After</Typography>
              <CardMedia component='img' sx={{p:1}} image={After} alt='after homepage' height="95%" width="95%"/>
              <CardContent align='center'>
              <Typography variant='body1'>After is a web application that allows you to plan your post mortem experience and get your affairs in order. </Typography>
              <Typography variant='body2'>Tools Used: React | Redux Toolkit | Node/Express | PostgreSQL</Typography>
              </CardContent>
              <CardActions sx={{display: 'flex', justifyContent: 'center'}}>
              <Link underline='none'><Button variant="contained" size='small' disabled='true'>pending</Button></Link>
              <Link underline='none' href="https://github.com/AfterDevTeam/After" target="_blank"><Button variant="contained" size='small'>Source Code</Button></Link>
              </CardActions>
            </Card>
          </Grid>

          <Grid xs={12} md={8}>
            <Card sx={{height:'100%', display: 'flex', flexDirection: 'column'}}>
            <Typography variant='h5' component='h2' align='center' sx={{p:1}}>Hate It?</Typography>
              <CardMedia component='img' sx={{p:1}} image={HateIt} alt='hateit homepage' height="95%" width="95%"/>
              <CardContent align='center'>
              <Typography variant='body1'>HateIt? is a web application used to track what you have eaten at different restaurants in order to avoid bad dishes and only order your favorites. </Typography>
              <Typography variant='body2'>Tools Used: React | Node/Express | MongoDB</Typography>
              </CardContent>
              <CardActions sx={{display: 'flex', justifyContent: 'center'}}>
              <Link underline='none'><Button variant="contained" size='small' disabled='true'>pending</Button></Link>
              <Link underline='none' href="https://github.com/maddogg612/H-Ate-It" target="_blank"><Button variant="contained" size='small'>Source Code</Button></Link>
              </CardActions>
            </Card>
          </Grid>

        </Grid>

      </Container>
  )
}

export default Projects;