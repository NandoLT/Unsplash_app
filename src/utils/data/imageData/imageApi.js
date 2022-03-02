import client from '../client';

export const searchImages = (param, page=1 ) => {
    const url =  `${process.env.REACT_APP_API_BASE_URL}?query=${param}&page=${page}&per_page=20`;
    return client.get(url);
}