import {searchImages} from '../../utils/data/imageData/imageApi';
// import {selectSearchTerm} from '../searchTerm/searchTermSlice';


//Actions
export const loadData = (fetchedImages) => {
    return {
        type: 'allImages/loadData',
        payload: fetchedImages
    }
}


//Reducers
const initialState = [];
export const allImagesReducer = (allImages = initialState, action) => {
    switch(action.type) {
        case 'allImages/loadData':
            return action.payload;
        default:
            return allImages;
    }
}



//selectors

export const selectAllImages = (state) => state.allImages;

// export const selectFilteredAllRecipes = (state) => {
//   const allRecipes = selectAllRecipes(state);
//   const searchTerm = selectSearchTerm(state);

//   return allRecipes.filter((recipe) =>
//     recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );
// };

//Utils
// const loadImageData = (searchTerm, page) => {
    // searchImages(searchTerm, page) 
    //     .then(response => {
    //         console.log('RESPONSE', response.result);
    //         return response.results
    //     });
// }