import { Box, Button, Grid, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import ProposalTable from "../../components/Proposal/ProposalTable/ProposalTable";
import { ContactUs } from "../../modals/contactUs";
import { getOrigin } from "../../utils/helpers";

export function Index() {
  const [data, setData] = useState([]);
  return (
    <Box alignContent="center" flex={8} sx={{ paddingTop: 2 }}>
      <Grid container direction="row">
        <Grid item>
          <Button
            onClick={() => {
              window.open(`${getOrigin()}/proposal/new`);
            }}
          >
            Add New
          </Button>
        </Grid>
        <Grid item>
          <ProposalTable rows={data} />
        </Grid>
      </Grid>
    </Box>
  );
}
