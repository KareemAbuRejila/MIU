import React, { useState } from 'react';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import Posts from '../Posts/Posts'
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import { LikedPosts } from '../../store/LikedPosts';
import { APIConfig } from '../../store/API-Config';
import Followings from '../followings/Followings';
import { StatusStore } from '../../store/Status';




const Blog = (props) => {

    const [likedPosts, setLikedPosts] = useState([]);
    const [savedSatus, setSaveStatus] = useState('');


    return (

        <APIConfig.Provider value={
            {
                postAPI: 'http://localhost:8080/posts/',
                userAPI: 'http://localhost:8080/users/',
                headersAPI: { "Access-Control-Allow-Origin": "*" }

            }
        }>
            <LikedPosts.Provider value={{ likedPosts, setLikedPosts }}>
                <StatusStore.Provider value={{ savedSatus, setSaveStatus }}>

                    <div className="Blog">
                        <header>
                            <nav>
                                <ul>
                                    <li><Link to="/posts"> Posts</Link></li>
                                    <li><Link to={{
                                        pathname: '/new-post',                      // props.match.url + to get 
                                        hash: '#submit',
                                        search: '?quick-submit=true'
                                    }}>New Post</Link></li>
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
            </LikedPosts.Provider >
        </APIConfig.Provider>
    );
}


export default Blog;

