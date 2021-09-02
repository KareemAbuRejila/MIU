import React, { useContext, useEffect, useState } from 'react';
import './Blog.css'
import NewPost from '../../components/newPost/NewPost';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import { APIConfig } from '../../store/API-Config';
import Posts from '../posts/Posts';
import Followings from '../followings/Followings';
import { LikedPosts } from '../../store/LikedPosts';
import { StatusStore } from '../../store/Status';


const Blog = () => {

    const [likes,setLikes]=useState([]);
    const [savedSatus,setSaveStatus]=useState('');

    return (
        <APIConfig.Provider value={
            {
                postsAPI: "http://localhost:8080/posts",
                userAPI: "http://localhost:8080/users",
                headersAPI: { "Access-Control-Allow-Origin": "*" }
            }
        }>
            <LikedPosts.Provider value={{likes,setLikes}}>
                <StatusStore.Provider value={{savedSatus,setSaveStatus}}>

            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/posts">Posts</Link></li>
                            <li><Link to={
                                {
                                    pathname: "/new-post",
                                    hash: "#submit",
                                    search: "?quick-submit=true"
                                }
                            }>New Post</Link></li>
                            <li><Link to="/followings">Followings</Link></li>

                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/posts" component={Posts} />
                    <Route path="/followings" component={Followings} />

                    <Redirect from="/" to="/posts" />

                </Switch>
            </div>
                            
            </StatusStore.Provider>
            </LikedPosts.Provider>
        </APIConfig.Provider>
    );
}

export default Blog;