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
        console.log('DATA', data);
        setMyImages(data);
    },[])

    return (
        <Layout>
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid className='lateral-zone' item xs={4}>
                    <h2>Espacio buscador</h2>
                </Grid>
                <Grid item xs={8}>
                    <h2>My Photos</h2>
                    {
                        myImages ? 
                            <ImageList sx={{ width: 1, height: '100%' }} cols={3} rowHeight={164}>
                                {
                                    myImages.map(img => {
                                        return (
                                            <ImageCard img={img} />
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
