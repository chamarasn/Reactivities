import { Box, FormControl, FormControlLabel, FormGroup, FormLabel, Paper, Radio, RadioGroup, Switch } from '@mui/material'
import React from 'react'

export default function Books() {
  return (
     <Box alignContent="center" flex={6} sx={{paddingTop:2}}>
      <form>
        <Paper sx={{padding: 4}}>
        <FormControl variant='filled'>
            <FormLabel component="legend">Owns estate</FormLabel>
            <FormGroup row>
                <FormControlLabel
                    label="Marcia"
                   // labelPlacement='start'
                    control={
                      <Switch
                          checked
                      />
                    }
                />
            </FormGroup>
              <FormGroup>
                  <FormControlLabel
                      label="Marcia"
                      control={
                        <Switch
                            checked
                        />
                      }
                  />
              </FormGroup>            
        </FormControl>
        <FormControl>
           <FormLabel>Redidence</FormLabel>
           <RadioGroup >
                <FormControlLabel 
                  label="HOME"
                  control={
                    <Radio></Radio>
                  }
                />
                <FormControlLabel 
                  label="Room"
                  control={
                    <Radio></Radio>
                  }
                />                
           </RadioGroup>
        </FormControl>
        </Paper>
      </form>
     </Box>
  )
}
