import { Box, List, ListItem, ListItemButton, ListItemIcon,PaletteMode, ListItemText, Switch } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import Person2Icon from '@mui/icons-material/Person';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import ModeNightIcon from '@mui/icons-material/ModeNight';

interface Props
{
  mode: PaletteMode,
  setMode: any
}
export default function Sidebar({mode, setMode}: Props) {
  return (
    <Box flex={1} p={2} sx={{display: {xs: "none", sm: "block"}}}>
      <Box position="fixed">
          <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/">
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="books">
              <ListItemIcon>
                <AutoStoriesIcon/>
              </ListItemIcon>
              <ListItemText primary="Books" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="proposal">
              <ListItemIcon>
                <LocalGroceryStoreIcon/>
              </ListItemIcon>
              <ListItemText primary="Proposals" />
            </ListItemButton>
          </ListItem>                    
          <ListItem disablePadding>
            <ListItemButton component="a" href="contactus">
              <ListItemIcon>
                <SettingsIcon/>
              </ListItemIcon>
              <ListItemText primary="Contact Us" />
            </ListItemButton>
          </ListItem>          
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <SettingsIcon/>
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>           
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Person2Icon/>
              </ListItemIcon>
              <ListItemText primary="Setting" />
            </ListItemButton>
          </ListItem>              
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <ModeNightIcon/>
              </ListItemIcon>
              <Switch onChange={()=> setMode((y: any)=> y === "light" ? "dark" : "light")}/>
            </ListItemButton>
          </ListItem>                   
          </List>
      </Box>

    </Box>
  )
}
