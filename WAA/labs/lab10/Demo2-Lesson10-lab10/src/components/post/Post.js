import React, { useState } from 'react';
import './Post.css'
const Post = (props) => {
    return ( 
        <div className="Post" onClick={props.clicked}>
            <h3>Title: {props.title}</h3>
            <p>author: {props.author}</p>
        </div>
     );
}
 
export default Post;