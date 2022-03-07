import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {loadData, selectAllImages} from '../../features/allImages/allImagesSlice';
import storage from '../../utils/storage/storage';
import Layout from '../commons/Layout/Layout';
import { Searcher } from '../commons/Searcher';
import { DashboardImagesGrid } from './DashboardImagesGrid';
import { searchImages } from '../../utils/data/imageData/imageApi';
import { Pagination } from '@mui/material';
import { Alert } from '@mui/material';

import '../../assets/css/Dashboard.css';

export const Dashboard = () => {

    const dispatch = useDispatch();
    const allImages = useSelector(selectAllImages);

    const [search, setSearch] = useState('');
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

    const searchImagesCall = (search, page ) => {
        searchImages(search, page)
            .then(response => dispatch(loadData(response.results)));
    }

    const handleChange = (event, value ) => {
        searchImagesCall(search, value);
    }

    useEffect( () => {
        searchImages(search, page)
            .then(response => {
                dispatch(loadData(response.results))
                setPagination(response.total_pages);
        });
    }, [search])

    return (
        <Layout>
            <Searcher   setSearch={setSearch} valueToShort={valueToShort} valueSucces={valueSucces}/>
            <br />
            {notValidValue ? <Alert sx={{width: '80%', margin:'auto'}} severity="warning">{valueShort}</Alert> : ''}
            <hr />
            {
                allImages.length > 0 ?
                <>
                    <DashboardImagesGrid images={allImages} searchBy={search} />
                    <Pagination count={pagination} variant="outlined" shape="rounded" onChange={handleChange} sx={{justifyContent:'center'}}/>
                </>
                :
                    <h2>Start Searching images</h2>
            }
        </Layout>
    )
}
