import React from 'react';
import { Grid, Card, CardContent, Typography, TextField, Button } from '@mui/material';

const Contact = () => {

  return (
  <Grid className="contactForm" id="contactForm">
      <Card style={{ maxWidth: 900, padding: '20px 5px', margin: '10px auto' }}>
        <CardContent>
          <Typography gutterBottom variant="h5">
            Contact Me
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            gutterBottom
          >
            Always looking for new opportunities, please reach out.
          </Typography>
          <form method="post" action="https://www.flexyform.com/f/044df292e251a5c35cf718f1c3010dda462d6ef6">
            <Grid container spacing={1}>
              <Grid xs={12} item>
                <TextField
                  className="form-control firstName"
                  placeholder="Enter first name"
                  label="Name"
                  variant="outlined"
                  fullWidth
                  required
                  type='text'
                  name='fullname'
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  className="form-control email"
                  placeholder="Enter email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  required
                  type='email'
                  name='_reply-to'
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  className="form-control formInput"
                  placeholder="Type your message here"
                  multiline
                  rows={4}
                  label="Message"
                  variant="outlined"
                  fullWidth
                  required
                  type='text'
                  name='message'
                />
              </Grid>
              <Grid xs={12} item>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default Contact;