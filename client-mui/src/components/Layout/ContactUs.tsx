import React, {useEffect, useState} from 'react'
import { Link, useParams  } from 'react-router-dom'
import {  Button, Grid, makeStyles, Palette, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import { css } from '@emotion/react'
import { styled } from '@mui/material/styles'
import * as  Yup from 'yup';
import { ContactUsFormValues } from '../../modals/contactUs'
import { Formik, Form, FormikHelpers, FormikProps } from "formik";

const PREFIX = 'MyCard'

const classes = {
  root: `${PREFIX}-root`,
  cta: `${PREFIX}-cta`,
  content: `${PREFIX}-content`,
  message: `${PREFIX}-message`,
  sendButton: `${PREFIX}-sendButton`,
}

const Root = styled('div')(({ theme }) => ({

      [`&.${classes.root}`]: {
        width: "100%"
        //minWidth: "100em"
      },
      [`& .${classes.cta}`]: {
        //borderRadius: theme.shape.radius
      },
      [`& .${classes.content}`]: {
        color: theme.palette.common.white,
        fontSize: 16,
        lineHeight: 1.7
      },
      [`& .${classes.message}`]: {
        border: `0.5px solid ${theme.palette.primary.main}`,
        borderRadius: 5
      },
      [`& .${classes.sendButton}`]: {
        border: `0.5px solid ${theme.palette.primary.main}`,
        borderRadius: 50,
        height: 45,
        width: 245,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
        //backgroundColor: theme.palette.customStatus.main
      },      
    }))

   
export default function ContactUs() {
    const theme = useTheme()
    const {id} = useParams<{id: string}>();
    const [contactus, setContactus] = useState<ContactUsFormValues>(new ContactUsFormValues())

    const validationSchema = Yup.object({
       name: Yup.string().required('The name is required'),
      // email: Yup.string().email().required('The email is required'),
      // phone: Yup.number().required(),
      // message: Yup.string().nullable(),
   })

   useEffect(() => {
    if (id){

  }else{
    debugger;

    setContactus({
      name: "dsf",
      email: "ii",
      phone: 0,
      message:  ""    
    });
  }
}, [id])

// function handleFormSubmit(contactUs: ContactUsFormValues){
//   debugger;
//   console.log("ss");
//   alert("dfs");
// }

const handleFormSubmit = () => {
  console.log("ss");
  alert("dd");

}

  return (

    <Formik 
    validationSchema={validationSchema}
    enableReinitialize 
    initialValues={contactus} 
    onSubmit={value => handleFormSubmit()}>
    {({ handleSubmit, isValid, isSubmitting, dirty })=> (    

          <Grid container direction="row" flex={10}>
        <Form onSubmit={handleSubmit} autoComplete="false">
            <Root className={classes.root}>
              <Grid item container direction="column" justifyContent="center"  lg={6} >
                  {/* <Grid item>
                      <Typography variant='h2' sx={{lineHeight:1}}>Contact Us</Typography>
                      <Typography variant='body1'>We are waiting</Typography>
                  </Grid>
                  <Grid item container>
                      <Grid item>
                          <Typography variant="body1">555-555</Typography>
                      </Grid>
                  </Grid>
                  <Grid item container>
                      <Grid item>
                          <Typography variant="body1">chama@gmail.com</Typography>
                      </Grid>
                  </Grid>  
                  <Grid item 
                      container 
                      direction="column"
                      sx={{
                          maxWidth: "20em",
                          '& .MuiTextField-root': {m:1 }
                      }}>
                      <Grid item>
                          <TextField label="Name" id="name" fullWidth/>
                      </Grid>
                      <Grid item>
                          <TextField label="Email" id="email" fullWidth/>
                      </Grid>
                      <Grid item>
                          <TextField label="Phome" id="phone" fullWidth/>
                      </Grid>                                
                  </Grid>        
                  <Grid item sx={{maxWidth: "20em"}}>
                      <TextField id="message" 
                      className={classes.message}
                      fullWidth
                      rows={10}
                      multiline/>
                  </Grid>   */}
                  <Grid item>
                    <button type='submit'>dfsdf</button>
                      <Button 
                      type='submit'
                      className={classes.sendButton}
             
                      variant='contained'>Send Message</Button>
                  </Grid>
              </Grid>
              <Grid item container  lg={3}>

              </Grid> 
          </Root>

        </Form>
      </Grid>
      )}
      </Formik>
    )
  }