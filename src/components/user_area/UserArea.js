import React, { useEffect, useState } from 'react';
import Layout from '../commons/Layout/Layout';
import {Box, Grid, ImageList, Alert, Button} from '@mui/material';
import {useSelector, useDispatch} from 'react-redux';
import {selectMyFavorites, getFavorites} from '../../features/favoriteImages/favoriteImagesSlice';
import storage from '../../utils/storage/storage';
import { ImageCard } from './ImageCard';
import { OrderImages } from './OrderImages';
import {Searcher} from '../commons/Searcher';

import '../../assets/css/UserArea.css';

export const UserArea = () => {

    const dispatch = useDispatch();
    const myFavoriteImages = useSelector(selectMyFavorites);

    const [foundImages, setFoundImages] = useState(null);
    const [notValidValue, setNotValidValue] = useState(false);
    const valueShort = 'value must be greater than two characters';
    
    useEffect(() => {
        const data = storage.get(process.env.REACT_APP_USER_FAVORITES);
        setFoundImages(data);
        data && dispatch(getFavorites(data));
    },[])

    const setSearch = (value) => {
        const search = myFavoriteImages.filter(image => image.description?.toLowerCase().includes(value.toLowerCase()));
        setFoundImages(search);
    }

    const resetImages = () => {
        setFoundImages(myFavoriteImages);
    }

    const valueToShort = () => {
        setNotValidValue(true);
    }
    
    const valueSucces = () => {
        setNotValidValue(false);
    }

    return (
        <Layout>
            <Box sx={{ flexGrow: 1, marginBottom:'50px' }}>
            <Grid container spacing={3}>
                <Grid className='lateral-zone' item xs={4}>
                    <Searcher setSearch={setSearch} valueToShort={valueToShort} valueSucces={valueSucces}/>
                    <br />
                    <Button  onClick={resetImages} variant="contained" sx={{ p: '10px' }} aria-label="search" >Reset Search</Button>
                    <br />
                    {notValidValue ? <Alert sx={{width: '80%', margin:'auto'}} severity="warning">{valueShort}</Alert> : ''}
                </Grid>
                <Grid item xs={8}>
                    <h2>My Photos</h2>
                    <hr />
                    {
                        foundImages ? 
                        // myFavoriteImages.length > 1 ? 
                            <>
                                <OrderImages images={foundImages} setMyImages={setFoundImages}/>
                                {/* <OrderImages images={myFavoriteImages} setMyImages={setFoundImages}/> */}
                                <hr />
                                <ImageList sx={{ width: 1, height: 'auto', gap:'10px' }} cols={3} rowHeight={164}>
                                    {
                                        foundImages.map(img => {
                                        // myFavoriteImages.map(img => {
                                            return (
                                                <ImageCard key={img.id} img={img} setMyImages={setFoundImages} />
                                            )
                                        })
                                    }
                                </ImageList>
                            </>
                        :
                            <Alert severity="warning">No images!</Alert>
                    }
                </Grid>
            </Grid>
            </Box>
        </Layout>
    );
}
