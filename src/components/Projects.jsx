import React from 'react';
import Pupperly from '../images/Project/pupperly.png'
import HateIt from '../images/Project/H-Ate-It.png'
import NTheLoop from '../images/Project/In the Loop with Drawer.png'
import Devaltio from '../images/Project/devaltio.png'
import After from '../images/Project/After.png'
import { Container, Grid, Button, CardMedia, Typography, CardContent, CardActions, Card, Link } from '@mui/material';


const Projects = () => {
  return (
      <Container style={{ maxWidth: '80%', padding: '20px', margin: '10px auto' }}>
        
        <Grid container spacing={4} gap={2} align="center">

          <Grid xs={12} sm={6}  md={4}>
            <Card sx={{height:'100%', display: 'flex', flexDirection: 'column'}}>
              <CardMedia component='img' sx={{p:'3%'}} image={Devaltio} alt='hateit homepage' height="95%" width="95%"/>
              <CardContent align="center">
              <Typography gutterBottom variant='h5' component='h2'>deValtio</Typography>
              <Typography>Development Tool | Tracker of Good Food</Typography>
              <Typography>React | Typescript | Chrome API | Valtio</Typography>
              </CardContent>
              <CardActions>
              <Link href="http://www.devaltio.io/" target="_blank"><Button variant="contained" size='small'>Live</Button></Link>
                <Link href="https://github.com/oslabs-beta/deValtio" target="_blank"><Button variant="contained" size='small'>Source Code</Button></Link>
              </CardActions>
            </Card>
          </Grid>

          <Grid xs={12} sm={6}  md={4}>
            <Card sx={{height:'100%', display: 'flex', flexDirection: 'column'}}>
              <CardMedia component='img' sx={{p:'3%'}} image={Pupperly} alt='pupperly homepage' height="95%" width="95%"/>
              <CardContent align='center'>
              <Typography gutterBottom variant='h5' component='h2'>Pupperly</Typography>
              <Typography>Web Application | Veterinary Medical Record Aggregator</Typography>
              <Typography>NextJS | Material UI | Hasura | Netlify</Typography>
              </CardContent>
              <CardActions>
              <Link href="https://pupperly.netlify.app/" target="_blank"><Button variant="contained" size='small' onclick="window.location.href='https://pupperly.netlify.app/';">Live</Button></Link>
              <Link href="https://github.com/PupperlyDevTeam/pupperly" target="_blank"><Button variant="contained" size='small'>Source Code</Button></Link>
              </CardActions>
            </Card>
          </Grid>

          <Grid xs={12} sm={6}  md={4}>
            <Card sx={{height:'100%', display: 'flex', flexDirection: 'column'}}>
              <CardMedia component='img' sx={{p:'3%'}} image={NTheLoop} alt='in the loop homepage' height="95%" width="95%"/>
              <CardContent align='center'>
              <Typography gutterBottom variant='h5' component='h2'>In The Loop</Typography>
              <Typography>Web Application | Find live music nearby and choose by ear</Typography>
              <Typography>React | Chakra UI | MongoDB</Typography>
              </CardContent>
              <CardActions>
              <Link><Button variant="contained" size='small' disabled='true'>Live</Button></Link>
              <Link href="https://github.com/in-the-loop-iteration/scratch-concert-finder"><Button variant="contained" size='small'>Source Code</Button></Link>
              </CardActions>
            </Card>
          </Grid>

          <Grid xs={12} sm={6}  md={4}>
            <Card sx={{height:'100%', display: 'flex', flexDirection: 'column'}}>
              <CardMedia component='img' sx={{p:'3%'}} image={After} alt='after homepage' height="95%" width="95%"/>
              <CardContent align='center'>
              <Typography gutterBottom variant='h5' component='h2'>After</Typography>
              <Typography>Web Application | Plan funeral and after death experience</Typography>
              <Typography>React | Node | PostgreSQL</Typography>
              </CardContent>
              <CardActions>
              <Link><Button variant="contained" size='small' disabled='true'>Live</Button></Link>
              <Link href="https://github.com/AfterDevTeam/After"><Button variant="contained" size='small'>Source Code</Button></Link>
              </CardActions>
            </Card>
          </Grid>

          <Grid xs={12} sm={6}  md={4}>
            <Card sx={{height:'100%', display: 'flex', flexDirection: 'column'}}>
              <CardMedia component='img' sx={{p:'3%'}} image={HateIt} alt='hateit homepage' height="95%" width="95%"/>
              <CardContent align='center'>
              <Typography gutterBottom variant='h5' component='h2'>HateIt?</Typography>
              <Typography>Web Application | Tracker of Good Food</Typography>
              <Typography>React | Node | MongoDB</Typography>
              </CardContent>
              <CardActions>
              <Link><Button variant="contained" size='small' disabled='true'>Live</Button></Link>
              <Link href="https://github.com/maddogg612/H-Ate-It"><Button variant="contained" size='small'>Source Code</Button></Link>
              </CardActions>
            </Card>
          </Grid>

        </Grid>

      </Container>
  )
}

export default Projects;