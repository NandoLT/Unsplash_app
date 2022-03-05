import React, { useEffect, useState } from 'react';
import Layout from '../commons/Layout/Layout';
import { Searcher } from '../commons/Searcher';
import { DashboardImagesGrid } from './DashboardImagesGrid';
import { searchImages } from '../../utils/data/imageData/imageApi';
import { Alert } from '@mui/material';


export const Dashboard = () => {

    const [search, setSearch] = useState('');
    const [images, setImages] = useState([]);
    const [notValidValue, setNotValidValue] = useState(false);
    const valueShort = 'value must be greater than two characters';

    const valueToShort = () => {
        setNotValidValue(true);
    }
    const valueSucces = () => {
        setNotValidValue(false);
    }

    useEffect(() => {
        searchImages(search)
            .then(response => {
                setImages(response.results)
            })
    }, [search])

    return (
        <Layout>
            <Searcher   setSearch={setSearch} valueToShort={valueToShort} valueSucces={valueSucces}/>
            <br />
            {notValidValue ? <Alert sx={{width: '80%', margin:'auto'}} severity="warning">{valueShort}</Alert> : ''}
            <hr />
            {
                images.length > 0 ?
                    <DashboardImagesGrid images={images} searchBy={search} />
                :
                    <h2>Start Searching images</h2>
            }
        </Layout>
    )
}
