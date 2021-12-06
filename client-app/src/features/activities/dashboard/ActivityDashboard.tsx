import React from "react";
import { Grid } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./activityList";

interface Props {
    activities : Activity[];
    SelectActivity: (id: string) => void;
    CancelSelectedActivity: () => void;
    selectedActivity: Activity | undefined;
    editMode: boolean;
    formOpen: (id: string)=> void;
    formClose: ()=> void;
    CreateOrEdit: (activity: Activity)=> void;
    deleteActivity: (id: string) => void;
    submitting: boolean;
}

export default function ActivityDashboard({activities, selectedActivity, SelectActivity, CancelSelectedActivity, editMode, 
    formOpen, formClose, CreateOrEdit, deleteActivity, submitting }: Props) {

    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList activities={activities} 
                SelectedActivity={SelectActivity}
                deleteActivity={deleteActivity}
                submitting={submitting}></ActivityList>
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity && !editMode &&
                <ActivityDetails activity={selectedActivity} CancelSelectedActivity={CancelSelectedActivity} FormOpen={formOpen}/>
                }
                { editMode &&
                <ActivityForm formClose={formClose} 
                activity={selectedActivity} 
                createOrEdit={CreateOrEdit}
                submitting={submitting}/> }
            </Grid.Column>
        </Grid>
    )
}