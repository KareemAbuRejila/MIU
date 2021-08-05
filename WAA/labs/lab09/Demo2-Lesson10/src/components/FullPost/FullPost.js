import React, { Component } from 'react';

import './FullPost.css';

const FullPost = (props) => {
    
        let post = <p>Please select a Post!</p>;
        if(props.id !=null){
            post = (
                <div className="FullPost">
                    <h1>{props.title}</h1>
                    <p>{props.body}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>
                 );
        }

       
        return post;
    }

export default FullPost;