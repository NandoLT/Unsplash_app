import React from 'react';
import {Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, IconButton, Typography} from '@mui/material';
import { red } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import storage from '../../utils/storage/storage';

export const ImageCard = ({img, setMyImages}) => {

    let date = new Date(img.date);

    const deleteItem = (imageId) => {
        const updateFavorites = storage.get(process.env.REACT_APP_USER_FAVORITES)
                                    .filter(image => image.id !== imageId);
        storage.set(process.env.REACT_APP_USER_FAVORITES, updateFavorites);
        setMyImages(updateFavorites);
    }

    return (
        <Card sx={{ maxWidth: 345, maxHeight:415, border:'1px solid #8080805c' }}>
            <CardHeader
                avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    <img src={img.user_avatar} alt="user_image"/>
                </Avatar>
                }
                title={img.alt_description ? img.alt_description : 'No title'}
                subheader={date.toLocaleTimeString('es-ES')}
            />
            <CardMedia
                component="img"
                height="194"
                image={img.url_thumb}
                alt={img.alt_desription}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                {img.description? img.description : (<h3>Image without description</h3>)}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="remove from favorites" onClick={() => deleteItem(img.id)}>
                    <DeleteIcon />
                </IconButton>
                <IconButton aria-label="edit">
                    <EditIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}
