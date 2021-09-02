import React, { useContext } from 'react';
import { LikedPosts } from '../../store/LikedPosts';

import './Post.css';

const Post = (props) => {

    const { likedPosts, setLikedPosts } = useContext(LikedPosts);

    const follow=()=>{
        setLikedPosts([...likedPosts,props.id]);
        console.log(likedPosts);
    }
    const unFollow=()=>{
        const updatedLikes=likedPosts.filter(id=>id!==props.id);
        setLikedPosts([...updatedLikes]);
       console.log(likedPosts);
   }

    return (
        <article className="Post" onClick={props.clicked}>
            <h1>{props.title}</h1>
            <div className="Info">
                <div className="Author">{props.author}</div>
           
            </div>
            {
                likedPosts.includes(props.id)
                    ?
                    <button onClick={unFollow}>
                        Unfollow </button>
                    :
                    <button onClick={follow}>
                        Follow </button>}
        </article>
    );
}

export default Post;