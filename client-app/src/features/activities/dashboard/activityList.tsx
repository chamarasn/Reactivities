import { observer } from "mobx-react-lite";
import React, { SyntheticEvent, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";

export default observer(function ActivityList(){

    const [target, setTarget] = useState('');

    const {activityStore} = useStore();
    const {activitiesByDate, deleteActivity, submitting} = activityStore;

    function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement>, id: string){
        setTarget(e.currentTarget.name);
        deleteActivity(id);
    }
    return (
        <Segment>
            <Item.Group divided>
                {activitiesByDate.map(activity =>(
                    <Item key={activity.id}>
                        <Item.Content>
                            <Item.Header as='a'>{activity.title}</Item.Header>
                            <Item.Meta>{activity.date}</Item.Meta>
                            <Item.Description>
                                <div>{activity.description}</div>
                                <div>{activity.city} , {activity.venue}</div>
                            </Item.Description>
                            <Item.Extra>
                                {/* <Button floated='right' content='View' color='blue' 
                                    onClick={()=> activityStore.setSelectedActivity(activity.id)} /> */}
                                <Button floated='right' content='View' color='blue' 
                                    as={NavLink} to={`/activities/${activity.id}`}/>                                    
                                <Button floated='right' content='Delete' color='red' 
                                    name={activity.id}
                                    onClick={(e)=> handleActivityDelete(e, activity.id)} 
                                    loading={submitting && target === activity.id} />
                                <Label basic content={activity.category}></Label>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
})
