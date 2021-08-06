import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from '../../compoents/post/Post';
import PostDetails from '../../compoents/posstDetails/PostDetails'
import './Blog.css'

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPost,setPostDetails]=useState(null);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const sposts = response.data.slice(0, 10);
                console.log("Posts Size: " + sposts.length);
                const updatedPosts = sposts.map(post => {
                    return {
                        ...post,
                        author: "KARIM"
                    }
                })
                setPosts([...updatedPosts]);
            })
    }
        , [])
    useEffect(() => { }, []);

    const rePosts = posts.map(post => {
        return <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => {selectPost(post.id) }} />
    });

    const selectPost=(postId)=>{
        setPostDetails(posts[postId-1])
    }

    return (
        <div>
            <section>            
                <h1>Welcome with {posts.length} posts</h1>
            </section>
            <section className="Posts">
                {rePosts}
            </section>
            <h1>Selected Post</h1>
            <section>
                <PostDetails
                id={selectedPost.id}
                title={selectedPost.title}
                body={selectedPost.body}
                />
            </section>
        </div>
    );
}

export default Blog;