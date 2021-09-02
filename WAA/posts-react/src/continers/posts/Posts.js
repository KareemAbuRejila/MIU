import "./Posts.css";
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { APIConfig } from '../../store/API-Config';
import Post from "../../components/post/Post";
import FullPost from "../../components/fullPost/FullPost";
import { Link, Route } from "react-router-dom";
import StatusComp from "../../components/status/Status";


const Posts = (props) => {
    const APIs = useContext(APIConfig);
    const postsAPI = APIs.postsAPI;
    const headersAPI = APIs.headersAPI;



    const [posts, setPosts] = useState([]);
    const [selectedId, setSelectedId] = useState(null);

    const [renderedId, setRenderedId] = useState(null); // remove this one

    useEffect(() => {
        setRenderedId(props.match.params.id);
    }, []);


    useEffect(() => {
        if (renderedId !== props.match.params.id) {
            axios.get(postsAPI, { headersAPI })
            .then(response => {
                console.log("Response Status : " + response.status);
                const list = response.data
                console.log("Fetched List: " + list.length);
                if (response.status == 200) {
                    setPosts(response.data);
                }
            }).catch(err => console.log("Response Error: " + err))
        }

    }, [props])

    const postsList = posts.map(post => {
        return <Link to={props.match.url + '/' + post.id} key={post.id}>
            <Post
                title={post.title}
                author={post.author}
                clicked={() => { setSelectedId(post.id) }}
                id={post.id} />
        </Link>

    });

    return (
        <div >
            <StatusComp/>
            <h1>Posts Continer</h1>
            <section className="Posts">
                {postsList}
            </section>
            <Route path={props.match.url + '/:id'} component={FullPost} />

        </div>
    );
}

export default Posts;