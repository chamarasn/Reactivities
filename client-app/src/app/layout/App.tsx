import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import { Activity } from '../models/activity';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import {v4 as uuid} from 'uuid';
import agent from '../api/agent';
import LoadingComponent from './loadinComponent';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  function handleSelectedActivity(id: String){
    setSelectedActivity(activities.find(x=>x.id === id));
  }

  function handleCancelSelectedActivity(){
    setSelectedActivity(undefined);
  }

  function handleFormOpen(id?: string){
    id ? handleSelectedActivity(id) : handleCancelSelectedActivity();

    setEditMode(true);
  }
  
  function handleFormClose(){
    setEditMode(false);
  }

  function handleDeleteActivity(id: string){
    setSubmitting(true);
      agent.Activities.delete(id).then(() => {
        setActivities(activities.filter(x=>x.id !== id ));
        setSubmitting(false);
    })
  }

  function handleCreateOrEdit(activity: Activity){
    setSubmitting(true);
    if (activity.id){
      agent.Activities.update(activity).then(() => {
        setActivities([...activities.filter(x=>x.id !== activity.id), activity]);
        setEditMode(false);
        setSelectedActivity(activity);
        setSubmitting(false);
      })
    }else {
      activity.id = uuid();
      agent.Activities.create(activity).then(() => {
        setActivities([...activities, activity]);
        setEditMode(false);
        setSelectedActivity(activity);
        setSubmitting(false);
      })
    }
  }

  useEffect(() => {
    agent.Activities.list().then(response => {

      response.map(x => 
        x.date = x.date.split('T')[0]
        );

      setActivities(response);
      setLoading(false);
    })
  }, [])

  if (loading) return <LoadingComponent content='Loading app' />

  return (
    <>
      <NavBar FormOpen={handleFormOpen}/>
        <Container style={{marginTop: '7em'}}>
          <ActivityDashboard 
            activities={activities}
            selectedActivity={selectedActivity}
            SelectActivity={handleSelectedActivity}
            CancelSelectedActivity={handleCancelSelectedActivity}
            editMode={editMode} 
            formOpen={handleFormOpen} 
            formClose={handleFormClose}
            CreateOrEdit={handleCreateOrEdit}
            deleteActivity={handleDeleteActivity}
            submitting={submitting}></ActivityDashboard>
        </Container>
    </>
  );
}

export default App;
