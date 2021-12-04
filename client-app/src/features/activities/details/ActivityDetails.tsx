import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
  activity: Activity;
  CancelSelectedActivity: ()=> void;
  FormOpen: (id: string)=> void;
}

export default function ActivityDetails({ activity, CancelSelectedActivity, FormOpen }: Props) {
  return (
    <Card fluid>
      <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
      <Card.Content>
        <Card.Header>{activity.title}</Card.Header>
        <Card.Meta>
          <span>{activity.date}</span>
        </Card.Meta>
        <Card.Description>{activity.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group>
          <Button basic color="blue" content="Edit" onClick={()=>FormOpen(activity.id)}/>
          <Button basic color="grey" content="Cancel" onClick={CancelSelectedActivity}/>
        </Button.Group>
      </Card.Content>
    </Card>
  );
}
