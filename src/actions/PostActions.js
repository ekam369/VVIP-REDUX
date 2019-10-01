import { FETCH_POSTS } from "./types";

export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>{
        return response.json()
    })
    .then((res)=>{
        dispatch({
            type: FETCH_POSTS,
            payload: res
        })
    })
};
