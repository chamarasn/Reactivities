import React, { useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { observer } from 'mobx-react-lite';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from '../../features/activities/home/HomePage';
import ActivityForm from '../../features/activities/form/ActivityForm';
import ActivityDetails from '../../features/activities/details/ActivityDetails';
import TestErrors from '../../features/errors/TestError';
import { ToastContainer } from 'react-toastify';
import NotFound from '../../features/errors/NotFound';
import ServerError from '../../features/errors/ServerError';
import LoginForm from '../../features/users/LoginForm';
import { useStore } from '../stores/store';
import LoadingComponent from './loadinComponent';
import ModalContainer from '../common/modals/ModalContainer';
import ProfilePage from '../../features/profiles/PrifilePage';

function App() {
  const {commonStore, userStore} = useStore();

  useEffect(() => {
    if (commonStore.token){
      userStore.getUser().finally(()=> commonStore.setApploaded())
    }else{
      commonStore.setApploaded();
    }
  },[commonStore, userStore])

  if (!commonStore.appLoaded) return <LoadingComponent content='Loading app...' />
  return (
    <>
      <ModalContainer />
      <Routes >
        <Route path='/' element={<HomePage />}></Route>
        <Route path={'activities/*'} element={<LoadActivities /> } />
        <Route path={'/login'} element={<LoadLogin /> } />
        <Route path={'/*'} element={<OtherRouters />}></Route>
      </Routes>
    </>
  );
}

function LoadLogin(){
  return (
    <>
      <ToastContainer position='bottom-right' hideProgressBar/>
      <NavBar/>
      <Container style={{marginTop: '7em'}}>
          {
          <Routes >
              <Route path='/'  element={<LoginForm />} ></Route>
            </Routes> 
          }
      </Container>
    </>
  )
}

function LoadActivities(){
  const location = useLocation();
  return (
    <>
      <ToastContainer position='bottom-right' hideProgressBar/>
      <NavBar/>
      <Container style={{marginTop: '7em'}}>
          {
          <Routes >
              <Route path='/'  element={<ActivityDashboard />} ></Route>
              <Route path=':id' element={<ActivityDetails />} ></Route>
              <Route path='/activityEdit' element={<ActivityForm />}>
                <Route key={location.key}  path=':id' element={<ActivityForm />} ></Route> 
              </Route>
              <Route path={'/login'} element={<LoginForm /> } />

            </Routes> 
          }
      </Container>
    </>
  )
}

function OtherRouters(){
  const location = useLocation();

  return (
    <>
      <ToastContainer position='bottom-right' hideProgressBar/>
      <NavBar/>
      <Container style={{marginTop: '7em'}}>
          {
            <Routes location={location}>
              <Route path='/profiles/:username' element={<ProfilePage />} ></Route>
              <Route path='/errors' element={<TestErrors />} ></Route>
              <Route path='/server-error' element={<ServerError />} ></Route>
              <Route path='/*' element={<NotFound />} ></Route>
            </Routes> 
          }
      </Container>
    </>
  )
}

export default observer(App);
