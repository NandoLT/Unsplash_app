import React, { useEffect, useState } from 'react';
import Layout from '../commons/Layout/Layout';
import {Box, Grid, ImageList, Alert} from '@mui/material';
import storage from '../../utils/storage/storage';
import { ImageCard } from './ImageCard';
import { OrderImages } from './OrderImages';
import {DashboardSearcher as Searcher} from '../dashboard/DashboardSearcher';

import '../../assets/css/UserArea.css';

export const UserArea = () => {

    const [myImages, setMyImages] = useState(null);
    const [foundImages, setFoundImages] = useState(null)
    
    useEffect(() => {
        const data = storage.get(process.env.REACT_APP_USER_FAVORITES);
        setMyImages(data);
        setFoundImages(data);
    },[])

    const setSearch = (value) => {

        if(value.length !== 0 ) {
            const search = myImages.filter(image => image.description.toLowerCase().includes(value.toLowerCase()));
            // console.log('SEARCH', search);
            setFoundImages(search);
            // console.log('FOUND IMAGES', foundImages);
        } else {
            setFoundImages(myImages);
        }
    }

    return (
        <Layout>
            <Box sx={{ flexGrow: 1, marginBottom:'50px' }}>
            <Grid container spacing={3}>
                <Grid className='lateral-zone' item xs={4}>
                    <h2>Espacio buscador</h2>
                    <Searcher setSearch={setSearch}/>
                </Grid>
                <Grid item xs={8}>
                    <h2>My Photos</h2>
                    <hr />
                    {
                        foundImages ? 
                            <>
                                <OrderImages images={myImages} setMyImages={setFoundImages}/>
                                <hr />
                                <ImageList sx={{ width: 1, height: 'auto', gap:'10px' }} cols={3} rowHeight={164}>
                                    {
                                        foundImages.map(img => {
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
