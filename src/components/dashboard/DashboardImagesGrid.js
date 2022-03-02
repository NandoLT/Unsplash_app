import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon  from '@mui/icons-material/StarBorder';

export const DashboardImagesGrid = ({images, searchBy}) => {
    console.log('IMAGES COMPNENT', images);
    
    return (
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
                            <IconButton
                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                aria-label={`info about ${img.alt_description}`}
                            >
                                <StarBorderIcon />
                            </IconButton>
                        }
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}
