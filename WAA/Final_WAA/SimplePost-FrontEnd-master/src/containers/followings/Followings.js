import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, Route } from 'react-router-dom';
import FullPost from '../../components/FullPost/FullPost';
import Post from '../../components/Post/Post';
import { APIConfig } from '../../store/API-Config';
import { LikedPosts } from '../../store/LikedPosts';
import './Followings.css'

const Followings = (props) => {

    const APIs = useContext(APIConfig);
    const postAPI = APIs.postAPI;
        //=================EXPLANATION====================

        const [posts, setPosts] = useState([]);
        const [isLoading, setLoading] = useState(false); // indicates that is retreiving data
        const [error, setError] = useState();
        const { likedPosts, setLikedPosts } = useContext(LikedPosts);

    
        function fetchPostsHandler() {
            const headers = {
                'Access-Control-Allow-Origin': '*',
    
            }
            setLoading(true);
            setError(null); // this is to set the error to null, if there were any previous errors existing 

            console.log([...likedPosts]);
            axios(postAPI, { headers })
                .then(response => {
                    const tempList=[];
                    likedPosts.forEach(id => {
                        console.log(response.data.find(p=>p.id==id));
                        tempList.push(response.data.find(p=>p.id==id))
                    });
                    setPosts(tempList)
                    console.log(tempList);
                    setLoading(false);

                })
                .catch(error => {
                    setError(error.message);
                    setLoading(false);
                })
        }
    
        useEffect(fetchPostsHandler, [likedPosts]); // This will be fetched when mounted
    
           // JUST FOR EXPLNATION  ==================================

    // We can do this rather than this :: <Post title={{...posts[1]}.title} />
    const rposts = posts.map(post => {
        return <Link to={props.match.url + '/' + post.id} key={post.id}>
            <Post
                title={post.title}
                author={post.author}
                id={post.id} />
        </Link>
    });

    let content = <p >No posts available</p>;
    
    if (rposts.length > 0) {
        content = rposts;
    }
     if (error) {
        content = <p>{error}</p>;
    }
     if (isLoading) {
        content = <p> Loading ... </p>;  // BONUS MAKE THIS WAIT FOR A 30 seconds
    }

    return ( 
        <div >
            <section className="Followings">
            {content}
            </section>
        </div>
     );
}
 
export default Followings;