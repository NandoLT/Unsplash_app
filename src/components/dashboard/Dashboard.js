import React, { useEffect, useState } from 'react';
import Layout from '../commons/Layout/Layout';
import { DashboardSearcher } from './DashboardSearcher';
import { DashboardImagesGrid } from './DashboardImagesGrid';
import { searchImages } from '../../utils/data/imageData/imageApi'

export const Dashboard = () => {

    const [search, setSearch] = useState('');
    const [images, setImages] = useState([])

    useEffect(() => {
        searchImages(search)
            .then(response => {
                setImages(response.results)
            })
    }, [search])

    return (
        <Layout>
            <DashboardSearcher setSearch={setSearch}/>
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
