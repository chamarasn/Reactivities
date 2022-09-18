import { useState } from "react";
import {
  Box,
  createTheme,
  PaletteMode,
  Stack,
  ThemeProvider,
} from "@mui/material";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import { Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "./components/Layout/Dashboard";
import Books from "./components/Layout/Books";
import MarketPlace from "./components/Layout/MarketPlace";
import ContactUs from "./components/Layout/ContactUs";
import { Index as Proposal } from "./containers/ProposalListPage/Index";
import { Index as NewProposal } from "./components/Proposal/Edit/Index";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  const [mode, setMode] = useState<PaletteMode>("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Navbar />
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Sidebar setMode={setMode} mode={mode} />
            <Routes>
              <Route path="/" element={<Dashboard />}></Route>
              <Route path="/books" element={<Books />}></Route>
              <Route path="/marketPlace" element={<MarketPlace />}></Route>
              <Route path={'Proposal/*'} element={<LoadProposals /> } /> 
              <Route path="/contactus" element={<ContactUs />}></Route>
            </Routes>
          </Stack>
          <Add />
        </Box>
      </ThemeProvider>
    </Provider>
  );
}

function LoadProposals(){
  const location = useLocation();
  return (
    <>
      {/* <ToastContainer position='bottom-right' hideProgressBar/>
      <NavBar/>
      <Container style={{marginTop: '7em'}}> */}
          {
          <Routes >
              <Route path='/'   element={<Proposal /> } ></Route>
              <Route path='/new'   element={<NewProposal /> } ></Route>
              {/* <Route path=':id' element={<ActivityDetails />} ></Route>
              <Route path='/activityEdit' element={<ActivityForm />}>
                <Route key={location.key}  path=':id' element={<ActivityForm />} ></Route> 
              </Route>
              <Route path={'/login'} element={<LoginForm /> } /> */}

            </Routes> 
          }
    </>
  )
}

export default App;
