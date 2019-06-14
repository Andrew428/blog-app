
import * as actionTypes from './actionTypes';


//Gets the list of All Post
export const fetchPosts = async function () {
    const response = await fetch(`/api/blog/getPosts`);    
    const body = await response.json();
    //console.log(body);
    return { type: actionTypes.FETCH_POSTS, payload: body }
};

//Get the selected post
export const fetchPost = async function(id){    
    console.log("getpost", id)
    const response = await fetch(`/api/blog/getPost/${id}`);    
    const body = await response.json();
    //console.log(body);
    return { type: actionTypes.FETCH_POST, payload: body }
};

//Adds a new post
export const createPost = async function (data){ 
    const response = await fetch(`/api/blog/createPost`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(data)
    });    
    const body = await response.json();    
    //console.log(body);
    return { type: actionTypes.CREATE_POST, payload: body }
};


//Deletes a new post
export const deletePost = async function (id, callback){    
    console.log("getpost", id)
    const response = await fetch(`/api/blog/deletePost/${id}`);    
    const body = await response.json();
    callback();
    //console.log(body);
    return { type: actionTypes.DELETE_POST, payload: body }
};