import React, {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon  from '@mui/icons-material/Favorite';
import { Tooltip, Modal, Button, ImageListItemBar, ImageList, ImageListItem, Box } from '@mui/material';
import storage from '../../utils/storage/storage';

import '../../assets/css/DashboardImagesGrid.css';

export const DashboardImagesGrid = ({images}) => {
    
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(!open);
    }

    const saveStorage = (imageData) => {
        storage.set(process.env.REACT_APP_USER_FAVORITES, [imageData])
        setOpen(!open);
    }

    const updateStorage = (imageData) => {

        let data = storage.get(process.env.REACT_APP_USER_FAVORITES)
        data.push(imageData);

        storage.set(process.env.REACT_APP_USER_FAVORITES, data);
        
        setOpen(!open);
    }

    const addToFavorites = (img) => {

        const imageData = {
            id: img.id,
            alt_description: img.alt_description,
            description: img.description,
            width: img.width,
            height: img.height,
            likes: img.likes,
            url_full: img.urls.full,
            url_thumb: img.urls.thumb,
            user_avatar: img.user.profile_image.medium,
            date: Date.now()
        }

        storage.get(process.env.REACT_APP_USER_FAVORITES) ?
            updateStorage(imageData)
        :
            saveStorage(imageData)                    
    }

    return (
        <>  
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
            <ImageList variant='masonry' >
                {images.map((img) => (
                    <ImageListItem key={img.id}>
                        <img
                            src={img.urls.regular}
                            alt={img.alt_description}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={img.alt_description}
                            actionIcon={
                                <Tooltip title="Add To Favorites">
                                    <IconButton
                                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                        aria-label={`info about ${img.alt_description}`}
                                        onClick={() => addToFavorites(img)}
                                    >
                                        <FavoriteIcon  className="startFavorite" />
                                    </IconButton>
                                </Tooltip>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </>
    );
}
