import React,{useState, useEffect} from 'react';
import {Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, IconButton, Typography, Badge} from '@mui/material';
import { red } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DownloadIcon from '@mui/icons-material/Download';
import FavoriteIcon from '@mui/icons-material/Favorite';
import storage from '../../utils/storage/storage';
import {DescriptionForm} from './DescriptionForm';
import { saveAs } from 'file-saver'
import { ImgTableData } from './ImgTableData';


export const ImageCard = ({img, setMyImages}) => {

    const [open, setOpen] = useState(false);
    const [description, setDescription] = useState();

    
    useEffect(() => {
        description && updateDescription(img, description);
    },[description])

    let date = new Date(img.date);

    const deleteItem = (imageId) => {
        const updateFavorites = storage.get(process.env.REACT_APP_USER_FAVORITES)
                                    .filter(image => image.id !== imageId);
        storage.set(process.env.REACT_APP_USER_FAVORITES, updateFavorites);
        setMyImages(updateFavorites);
    }

    const openEdit = () => {
        setOpen(!open);
    }

    const updateDescription = (img) => {
        img.description = description;
        deleteItem(img.id);
        const update = storage.get(process.env.REACT_APP_USER_FAVORITES);
        update.push(img);
        storage.set(process.env.REACT_APP_USER_FAVORITES, update);
        setMyImages(update);
    }

    const downloadImg = () => {
        saveAs(img.url_full, img.id);
    }

    return (
        <Card sx={{ maxWidth: 345, maxHeight:'100%', border:'1px solid #8080805c' }}>
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
                {img.description? img.description : (<b>Image without description</b>)}
                <ImgTableData width={img.width} height={img.height} dateAdded={date} />
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="remove from favorites" onClick={() => deleteItem(img.id)}>
                    <DeleteIcon />
                </IconButton>
                <IconButton aria-label="edit" onClick={openEdit}>
                    <EditIcon />
                </IconButton>
                <IconButton aria-label="likes">
                <Badge
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    badgeContent={img.likes} 
                    color="primary"
                >
                        <FavoriteIcon />
                </Badge>
                </IconButton>
                <IconButton aria-label="download" onClick={downloadImg}>
                    <DownloadIcon />
                </IconButton>
            </CardActions>
        <DescriptionForm open={open} setOpen={setOpen} setDescription={setDescription} imgDescription={img.description} />
        </Card>
    );
}
