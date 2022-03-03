import React,{useState} from 'react';
import {  Modal, Button, Box,TextField  } from '@mui/material';

import '../../assets/css/DescriptionForm.css';

export const DescriptionForm = ({open, setOpen, setDescription, imgDescription}) => {
    
    const [value, setValue] = useState();

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleUpdate = () => {
        setDescription(value);
        setOpen(!open);
    }
    const handleClose = () => {
        setOpen(!open);
    }

    return (
        <Modal
                hideBackdrop
                open={open}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
            <Box className='modalBoxForm' sx={{ width: 400 }}>
                <h2 id="child-modal-title">Edit Description</h2>
                <TextField
                    fullWidth 
                    id="outlined-textarea"
                    label="Description"
                    placeholder="Add Description"
                    rows={6}
                    value={value}
                    onChange={handleChange}
                    multiline
                />
                <hr color='grey'/>
                <Button onClick={handleUpdate} variant="contained">Update Description</Button><br /><br />
                <Button onClick={handleClose} variant="contained">Close</Button>
            </Box>
        </Modal>
    )
}
