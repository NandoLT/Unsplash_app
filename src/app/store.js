import {createStore, combineReducers} from 'redux';
import {allImagesReducer} from '../features/allImages/allImagesSlice';
import { myFavoriteImagesReducer } from '../features/favoriteImages/favoriteImagesSlice';

export const store = createStore(combineReducers({
    allImages:  allImagesReducer,
    myFavorites: myFavoriteImagesReducer
}));