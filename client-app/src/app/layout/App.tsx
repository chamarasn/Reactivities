import React from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { observer } from 'mobx-react-lite';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from '../../features/activities/home/HomePage';
import ActivityForm from '../../features/activities/form/ActivityForm';
import ActivityDetails from '../../features/activities/details/ActivityDetails';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route 
          path={'/*'}
          element={<LoadActivities /> }
          />
      </Routes>
    </>
  );
}

function LoadActivities(){
  const location = useLocation();
  return (
    <>
      <NavBar/>
      <Container style={{marginTop: '7em'}}>
          {
          <Routes>
              <Route path='/activities' element={<ActivityDashboard />} ></Route>
              <Route path='/activities/:id' element={<ActivityDetails />} ></Route>
              <Route   path='/activityEdit' element={<ActivityForm />}>
                <Route key={location.key}  path=':id' element={<ActivityForm />} ></Route> 
              </Route>
            </Routes> 
          }
      </Container>
    </>
  )
}

export default observer(App);
