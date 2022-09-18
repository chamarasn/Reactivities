import { FormControl, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch } from "react-redux";

export function Index() {
  const dispatch = useDispatch();

  // const updateFieldValue = (fieldName: FieldName, value: any) =>
  //   dispatch()

  return (
    <Box alignContent="center" flex={8} sx={{ paddingTop: 2 }}>
      <Grid
        item
        container
        direction="column"
        justifyContent="left"
        sx={{ p: 1 }}
        xs={4}
      >
        <Grid item xs={12}>
          <Typography variant="h5" component="h5">
            Information
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="outlined-required"
            label="Name"
            onBlur={(value) => value + "ff"}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="outlined-required"
            label="Name"
            onBlur={(value) => value + "ff"}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="outlined-required"
            label="Name"
            onBlur={(value) => value + "ff"}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
