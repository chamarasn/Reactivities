import React from "react";
import { Tab } from "semantic-ui-react";
import { Profile } from "../../app/models/profile";
import { useStore } from "../../app/stores/store";
import ProfileAbout from "./ProfileAbout";
import ProfileFollowings from "./ProfileFollowings";
import ProfilePhotos from "./ProfilePhotos";

interface Props{
    profile: Profile
}

export default function ProfileContent({profile}: Props) {
    const {profileStore} = useStore();

    const panes = [
        {menuItem: 'About', render: () => <ProfileAbout profile={profile} />},
        {menuItem: 'Photos', render: () => <ProfilePhotos profile={profile} />},
        {menuItem: 'Events', render: () => <Tab.Pane>Events Content</Tab.Pane>},
        {menuItem: 'Folllowers', render: () => <ProfileFollowings />},
        {menuItem: 'Following', render: () =>  <ProfileFollowings />}
    ]

    return (
        <Tab 
            menu={{fluid: true, vertical: true}}
            menuPosition='right'
            panes={panes}
            onTabChange={(e, data) => profileStore.setActivetab(data.activeIndex)}
        />
    )
}