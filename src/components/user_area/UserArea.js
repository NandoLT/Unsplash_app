import React, { useEffect, useState } from 'react';
import Layout from '../commons/Layout/Layout';
import {Box, Grid, ImageList, Alert} from '@mui/material';
import storage from '../../utils/storage/storage';
import { ImageCard } from './ImageCard';

import '../../assets/css/UserArea.css';

export const UserArea = () => {

    const [myImages, setMyImages] = useState(null);

    useEffect(() => {
        const data = storage.get(process.env.REACT_APP_USER_FAVORITES);
        setMyImages(data);
    },[])

    return (
        <Layout>
            <Box sx={{ flexGrow: 1, marginBottom:'50px' }}>
            <Grid container spacing={3}>
                <Grid className='lateral-zone' item xs={4}>
                    <h2>Espacio buscador</h2>
                </Grid>
                <Grid item xs={8}>
                    <h2>My Photos</h2>
                    {
                        myImages ? 
                            <ImageList sx={{ width: 1, height: '100%', gap:'10px' }} cols={3} rowHeight={164}>
                                {
                                    myImages.map(img => {
                                        return (
                                            <ImageCard key={img.id} img={img} setMyImages={setMyImages} />
                                        )
                                    })
                                }
                            </ImageList>
                        :
                            <Alert severity="warning">This is a warning alert — check it out!</Alert>

                    }
                </Grid>
            </Grid>
            </Box>
        </Layout>
    );
}
