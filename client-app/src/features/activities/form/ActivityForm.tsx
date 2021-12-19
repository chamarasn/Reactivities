import { observer } from "mobx-react-lite";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Form, Segment } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/loadinComponent";
import { useStore } from "../../../app/stores/store";
import {v4 as uuid} from 'uuid';

export default observer(function ActivityForm(){
    const navigate = useNavigate();
    const {activityStore} = useStore();
    const {submitting, createActivity, editActivity, 
        loadActivity, loadingInitial} = activityStore;
    const {id} = useParams<{id: string}>();

    const [activity, SetActivity] = useState({
        id: '',
        title: '',
        date: '',
        description: '',
        category: '',
        city: '',
        venue: ''       
    });

    useEffect(() => {
        if (id){
            loadActivity(id).then(
            activity => SetActivity(activity!))
        }else{
            SetActivity({
                id: '',
                title: '',
                date: '',
                description: '',
                category: '',
                city: '',
                venue: ''       
            });
        }

    }, [id, loadActivity])

    function handleSubmit(){
        if (activity.id.length === 0 ){
            let newActivity = {
                ...activity,
                id: uuid()
            };
            createActivity(newActivity).then(()=>
                navigate(`/activities/${newActivity.id}`)
            )
        }else{
            editActivity(activity).then(()=>
                navigate(`/activities/${activity.id}`)
            )
        }
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ){
        const {name,value} = event.target;
        SetActivity({...activity, [name] : value});
    }

    if (loadingInitial) return <LoadingComponent content="Loading activity..."></LoadingComponent>

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit}>
                <Form.Input placeholder='Title' value={activity.title} name='title' onChange={handleInputChange} />
                <Form.TextArea placeholder='Description'  value={activity.description} name='description' onChange={handleInputChange}/>
                <Form.Input placeholder='Category'  value={activity.category} name='category' onChange={handleInputChange}/>
                <Form.Input type='date' placeholder='Date'  value={activity.date} name='date' onChange={handleInputChange}/>
                <Form.Input placeholder='City'  value={activity.city} name='city' onChange={handleInputChange}/>
                <Form.Input placeholder='Venue'  value={activity.venue} name='venue' onChange={handleInputChange}/>
                <Button floated='right' positive type='submit' content='Submit' loading={submitting}  />
                <Button floated='right' positive type='button' content='Cancel' />
            </Form>
        </Segment>
    )
})