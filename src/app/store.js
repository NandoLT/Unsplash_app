import {createStore, combineReducers} from 'redux';
import {allImagesReducer} from '../features/allImages/allImagesSlice';

export const store = createStore(combineReducers({
    allImages:  allImagesReducer
}));