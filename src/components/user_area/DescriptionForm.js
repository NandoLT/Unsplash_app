import React from 'react'

export const DescriptionForm = () => {
    return (
        <Modal
                hideBackdrop
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
            <Box className='modalBox' sx={{ width: 400 }}>
                <h2 id="child-modal-title">Image Added to favorites successfully</h2>

                <Button onClick={handleClose} variant="contained">Close</Button>
            </Box>
        </Modal>
    )
}
