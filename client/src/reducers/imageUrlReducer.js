const initialState = {
  url: 'https://images.unsplash.com/photo-1619717244859-d1d0044dd244?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
  exampleImages: [
    'https://images.unsplash.com/photo-1619717244859-d1d0044dd244?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
    'https://images.unsplash.com/photo-1619722005557-70d4ab332aa6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80',
    'https://images.unsplash.com/photo-1493804714600-6edb1cd93080?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
  ],
};

export default (state = initialState, action) => {
  switch(action.type) {
    case 'MAIN_IMAGE':
      // so no empty string urls are being set
      if (action.url.length === 0) {
        return state;
      }
      return {
       ...state,
       url: action.url
     };
    case 'ADD_URL':
      if (action.url.length === 0) {
        return state;
      }
      return {
       ...state,
       exampleImages: state.exampleImages.concat(action.url)
     };
     case 'DELETE_URL':
     // temporary so at least one image is showing and no react errors
     if(state.exampleImages.length === 1) {
        return state;
     }
      const newImageList = state.exampleImages.filter( url => url !== action.url);
      return {
        ...state,
        // set new url to first one in new Image list
        url: newImageList[0],
        exampleImages: newImageList
      };
    default:
     return state;
  }
};
