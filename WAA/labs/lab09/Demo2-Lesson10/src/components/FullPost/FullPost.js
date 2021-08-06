import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './FullPost.css';

const FullPost = (props) => {
    let post=<p>Please Select Any Post</p>

    const deletePost=(id)=>{
            axios.delete("http://localhost:8080/posts/"+id)
            .then(response=>
                response.status==200?
                console.log("Delete Succ"):
                console.log("Somthing wrong")
                ).catch(err=>console.log("Delete Error: "+err ));
    }


    if (props.id!=null) {
        post=<div className="FullPost">
        <h1>Post Details</h1>
        <h2>{props.title}</h2>
        <h5>{props.author}</h5>
        <h6>{props.contnet}</h6>
        <div className="Edit">
            <button onClick={()=>deletePost(props.id)} className="Delete">Delete Post</button>
            {/* <button onClick={()=>follow(props)} className="Follow">Follow</button> */}
        </div>
    </div>;
    }

    
    return post;
}
 
export default FullPost;