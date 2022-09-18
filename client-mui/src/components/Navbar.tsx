import { Notifications, Pets } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import MailIcon from '@mui/icons-material/Mail';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
})

const Search = styled("div")(({ theme}) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"
}))

const IconContainer = styled(Box)(({ theme}) => ({
  display: 'none',
  gap: 20,
  alignItems: 'center',
  [theme.breakpoints.up("sm")]: {
    display: "flex"
  }
}))

const UserBox = styled(Box)(({ theme}) => ({
  display: 'flex',
  gap: 10,
  alignItems: 'center',
  [theme.breakpoints.up("sm")]: {
    display: "none"
  }
}))
export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    debugger;
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
    
  };

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant='h6' sx={{display:{xs:"none", sm:"block"}}}>Dev</Typography>
        <Pets sx={{display:{xs:"block", sm:"none"}}}>x</Pets>
        <Search><InputBase placeholder='search...' /></Search>
        <IconContainer>
          <Badge badgeContent={4} color="error">
            <MailIcon  />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications  />
          </Badge>     
          <Avatar sx={{width:30, height:30}} 
            onClick={handleClick}
            src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y'/>     
        </IconContainer>
        <UserBox>
          <Avatar sx={{width:30, height:30}} 
            onClick={handleClick}
            src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y'/>     
          <Typography display="inline">John</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={handleClose}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>       
      </AppBar>
  )
}
