const axios = require("axios");
const config = require('../config');
const API_KEY = config.API_KEY;
const ROOT_URL = "http://reduxblog.herokuapp.com/api/";

exports.getPosts = async (req, res, next)=>{
    const url = `${ROOT_URL}posts${API_KEY}`;  
    return axios.get(url).then((data) => {
        console.log(data.data);        
        res.send(data.data)
    }).catch(err => {
        console.log(`❌  Error`, err);
        res.send(err);        
    });
}

exports.getPost = async (req, res, next)=>{
    const id = req.params.id;
    console.log("id",id);
    const url = `${ROOT_URL}posts/${id}${API_KEY}`;  
    return axios.get(url).then((data) => {
        console.log(data.data);        
        res.send(data.data)
    }).catch(err => {
        console.log(`❌  Error`, err);
        res.send(err);        
    });
}

exports.createPost = async (req, res, next)=>{
    console.log(req.body)
    const postData = req.body;
    const url = `${ROOT_URL}posts${API_KEY}`;  
    return axios.post(url, postData).then((data) => {
        // console.log(data);        
        res.send(data.data)
    }).catch(err => {
        console.log(`❌  Error`, err);
        res.send(err);        
    });
}

exports.deletePost = async (req, res, next)=>{
    const id = req.params.id;
    const url = `${ROOT_URL}posts/${id}${API_KEY}`;  
    return axios.delete(url).then((data) => {
        // console.log(data.data);        
        res.send(data.data)
    }).catch(err => {
        console.log(`❌  Error`, err);
        res.send(err);        
    });
}