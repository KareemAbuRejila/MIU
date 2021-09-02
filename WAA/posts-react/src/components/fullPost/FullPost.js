import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { APIConfig } from '../../store/API-Config';
import { LikedPosts } from '../../store/LikedPosts';
import './FullPost.css';

const FullPost = (props) => {
    const APIs = useContext(APIConfig);
    const postsAPI = APIs.postsAPI;
    const headersAPI = APIs.headersAPI;

    const { likes, setLikes } = useContext(LikedPosts);
    const [postCall, setPostCall] = useState({});
    const [renderedId, setRenderedId] = useState(null); // remove this one

    useEffect(() => {
            axios(postsAPI +"/"+ props.match.params.id, { headersAPI })
                .then(response => {
                    setPostCall(response.data);
                    setRenderedId(props.match.params.id);
                    console.log('This wont get called again ');
                })
            // console.log("Post ID: "+props.match.params.id);
            // console.log(props.match.params);
            // console.log(postsAPI);

    }, [props]);

    const removePostIdFromLikes = () => {
        const updatedLikes = likes.filter(id => id !== props.id);
        setLikes([...updatedLikes]);
        console.log(likes);
    }



    const deletePost = (id) => {
        axios.delete(postsAPI + "/" + id)
            .then(response => {
                if (response.status == 200) {
                    console.log("Delete Succ")
                    removePostIdFromLikes();
                    props.history.push('/');
                }
                else
                    console.log("Somthing wrong")
            }
            ).catch(err => console.log("Delete Error: " + err));
    }

    let post = <p>Please Select Any Post</p>

    if (props.match.params.id != null) {
        post = <div className="FullPost">
            <h1>Post Details</h1>
            <h2>{postCall.title}</h2>
            <h5>{postCall.author}</h5>
            <h6>{postCall.contnet}</h6>
            <div className="Edit">
                <button onClick={() => deletePost(props.id)} className="Delete">Delete Post</button>
                {/* <button onClick={()=>follow(props)} className="Follow">Follow</button> */}
            </div>
        </div>;
    }


    return post;
}

export default FullPost;