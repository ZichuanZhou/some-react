import {FETCH_POSTS, NEW_POSTS} from '../actions/Types';

const initialState = {
  items: [],
  item: {}
}

export default (state = initialState, action) => {
  console.log("reducer");
  switch(action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };
    
    case NEW_POSTS:
      return {
        ...state,
        item: action.payload
      }      

    default:
      return state;
  }
}
