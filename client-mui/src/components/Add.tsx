import { Avatar, Box, Button, ButtonGroup, Fab, IconButton, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import {Add as AddIcon, DateRange} from "@mui/icons-material"
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import VideocamIcon from '@mui/icons-material/Videocam';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ImageIcon from '@mui/icons-material/Image';
import DateRangeIcon from '@mui/icons-material/DateRange';

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap:"10px",
    marginBottom: 20
})

export default function Add() {
    const [open, setOpen] = useState(false);
  return (
    <>
    <Tooltip title="Delete" onClick={e=>setOpen(true)} 
        sx={{
            position: "fixed", 
            bottom: 20,
            left: {xs: "calc(50% -25px)", md: 30},
        }}>
        <Fab color="primary" aria-label="add">
        <AddIcon />
        </Fab>
    </Tooltip>
    <StyledModal
        open={open}
        onClose={()=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box width={400} 
            height={280} 
            bgcolor={"background.default"} color={"text.primary"} 
            p={3} borderRadius={5}>
            <Typography variant='h6' color="gray" textAlign="center">Create Post</Typography>
            <UserBox>
                <Avatar 
                    src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y'
                />
                <Typography fontWeight={500} variant="subtitle1">John dee</Typography>
            </UserBox>
            <TextField
                sx={{width:"100%"}}
                id="standard-multiline-static"
                multiline
                rows={3}
                placeholder="Default Value"
                variant="standard"
                />
            <Stack direction="row" gap={1} mt={2} mb={3}>
                <EmojiEmotionsIcon color="primary"/>
                <ImageIcon color="secondary"/> 
                <VideocamIcon color="success"/>
                <PersonAddIcon color="error"/>
            </Stack>
            <ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth>
                <Button>One</Button>
                <Button sx={{width:"100px"}}>
                    <DateRange />
                </Button>
            </ButtonGroup>            
        </Box>
    </StyledModal>
  </>
  )
}
