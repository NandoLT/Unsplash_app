import React, { useEffect, useState } from 'react';
import Layout from '../commons/Layout/Layout';
import { Searcher } from '../commons/Searcher';
import { DashboardImagesGrid } from './DashboardImagesGrid';
import { searchImages } from '../../utils/data/imageData/imageApi';
import { Pagination } from '@mui/material';
import { Alert } from '@mui/material';

import '../../assets/css/Dashboard.css';

export const Dashboard = () => {

    const [search, setSearch] = useState('');
    const [images, setImages] = useState([]);
    const [pagination, setPagination] = useState(null);
    const page = 1

    const [notValidValue, setNotValidValue] = useState(false);
    const valueShort = 'value must be greater than two characters';

    const valueToShort = () => {
        setNotValidValue(true);
    }
    const valueSucces = () => {
        setNotValidValue(false);
    }

    const searchImagesCall = (search, page) => {
        searchImages(search, page)
            .then(response => setImages(response.results));
    }

    const handleChange = (event, value ) => {
        searchImagesCall(search, value);
    }

    useEffect( () => {
        searchImages(search, page)
            .then(response => {
                setImages(response.results);
                setPagination(response.total_pages);
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
                <>

                    <DashboardImagesGrid images={images} searchBy={search} />
                    <Pagination count={pagination} variant="outlined" shape="rounded" onChange={handleChange} sx={{justifyContent:'center'}}/>
                </>
                :
                    <h2>Start Searching images</h2>
            }
        </Layout>
    )
}
