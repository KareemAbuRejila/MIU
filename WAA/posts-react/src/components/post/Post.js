import React, { useContext, useState } from 'react';
import './Post.css'
import {LikedPosts} from '../../store/LikedPosts'

const Post = (props) => {
     const {likes,setLikes}=useContext(LikedPosts);

     const likeNewUser=()=>{
         setLikes([...likes,props.id]);
         console.log(likes);
     }
     const unLikeNewUser=()=>{
         const updatedLikes=likes.filter(id=>id!==props.id);
        setLikes([...updatedLikes]);
        console.log(likes);
    }

    return ( 
        <div className="Post" onClick={props.clicked}>
            <h3>{props.title}</h3>
            <p>{props.author}</p>
        {
            likes.includes(props.id)
            ?
            <button 
            onClick={unLikeNewUser}
            >UnFollow</button>
            :
            <button
            onClick={likeNewUser}
            >Follow</button>
        }
                </div>

     );
}
 
export default Post;