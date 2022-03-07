

//actions
export const getFavorites = (dataStorage) => {
    return {
        type: 'get/getFavorites',
        payload: dataStorage
    }
}

export const removeFromFavorites = (image) => {
    return {
        type: 'remove/removeFromFavorites',
        payload: image
    }
}

export const modifyDescription = (image) => {
    return {
        type: 'modify/modifyDescription',
        payload: image
    }
}

//reducer
const initialState = [];
export const myFavoriteImagesReducer = (myFavorites = initialState, action) => {
    switch(action.type) {
        case 'get/getFavorites':
            console.log('PAYLOAD', action.payload);
            return action.payload;
        case 'remove/removeFromFavorites':
            return [myFavorites, ...action.payload];
        case 'modify/modifyDescription':
            return [myFavorites, ...action.payload];
        default:
            return myFavorites;
    }
}

//selectors
export const selectMyFavorites = state => state.myFavorites;