

//actions
export const getFavorites = (dataStorage) => {
    return {
        type: 'get/getFavorites',
        payload: dataStorage
    }
}
export const addToFavorites = (image) => {
    return {
        type: 'add/addToFavorites',
        payload: image
    }
}

export const removeFromFavorites = (imageId) => {
    return {
        type: 'remove/removeFromFavorites',
        payload: imageId
    }
}

//reducer
const initialState = [];
export const myFavoriteImagesReducer = (myFavorites = initialState, action) => {
    switch(action.type) {
        case 'get/getFavorites':
            console.log('PAYLOAD', action.payload);
            return action.payload;
        case 'add/addToFavorites':
            return  myFavorites.filter(img =>{
                   if(img.id === action.payload.id) {
                    img.description = action.payload.description;
                   }
                   return img;
                }); 
        case 'remove/removeFromFavorites':
            return myFavorites.filter(img => img.id !== action.payload);
        default:
            return myFavorites;
    }
}

//selectors
export const selectMyFavorites = state => state.myFavorites;