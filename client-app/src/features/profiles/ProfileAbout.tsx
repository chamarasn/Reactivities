import React, { useState } from "react";
import { Button, Grid, Header, Tab } from "semantic-ui-react";
import { Profile } from "../../app/models/profile";
import { useStore } from "../../app/stores/store";
import ProfileEditForm from "./ProfilEditForm";

interface Prop{
    profile: Profile
}

export default function ProfileAbout({profile}: Prop) {
  const [editMode, setEditMode] = useState(false);
  const {profileStore: { isCurrentUser }  } = useStore();

  return (
    <Tab.Pane>
      <Grid>
        <Grid.Column width={16}>
        <Header floated='left' icon='user' content={`About ${profile?.displayName}`} />
          {isCurrentUser && (
            <Button
              floated="right"
              basic
              content={editMode ? "Cancel" : "Edit Profile"}
              onClick={() => setEditMode(!editMode)}
            />
          )}
        </Grid.Column>
        <Grid.Column width={16} >
                    {editMode ? 
                        <ProfileEditForm setEditMode={setEditMode} />
                     :
                        <span style={{whiteSpace: 'pre-wrap'}}>{profile?.bio}</span>
                    }
        </Grid.Column>       
      </Grid>
    </Tab.Pane>
  );
}
