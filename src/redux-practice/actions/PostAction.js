import { FETCH_POSTS, NEW_POSTS } from './Types';
import axios from 'axios';

export const fetchPosts = () => dispatch => {
  console.log("fetching");
  axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/posts',
  })
    .then(res => res.data)
    .then(posts => {
      console.log(posts);
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      });
    })
    .catch(error => console.log(error));
}

export const createPost = (postData) => dispatch => {
  console.log("creating");
  axios({
    method: 'post',
    url: 'https://jsonplaceholder.typicode.com/posts',
    data: postData
  })
    .then(res => res.data)
    .then(post => {
      console.log(post);
      dispatch({
        type: NEW_POSTS,
        payload: post
      });
    })
    .catch(error => console.log(error));
}

