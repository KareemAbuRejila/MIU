import React from 'react';
import './PostDetails.css'

const PostDetails=(props)=>{
    let post =<p>Please Select Any Post</p>;
    if(props.id!=null){
        post=<div className="PostDetails">
        <h1>{props.title}</h1>
        <p>{props.body}</p>
        <div className="Edit">
            <button className="Delete">Delete</button>
        </div>
    </div>
    }
    return post;
};

export default PostDetails;