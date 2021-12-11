import { observer } from "mobx-react-lite";
import React, { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";

export default observer(function ActivityForm(){

    const {activityStore} = useStore();
    const {selectedActivity,submitting, closeForm, createActivity, editActivity} = activityStore;

    var initForm = selectedActivity ?? {
        id: '',
        title: '',
        date: '',
        description: '',
        category: '',
        city: '',
        venue: ''
    };

    const [activity, SetActivity] = useState(initForm);

    function handleSubmit(){
        activity.id ? editActivity(activity) : createActivity(activity);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ){
        const {name,value} = event.target;
        SetActivity({...activity, [name] : value});
    }

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
                <Button floated='right' positive type='button' content='Cancel' onClick={()=>closeForm()} />
            </Form>
        </Segment>
    )
})