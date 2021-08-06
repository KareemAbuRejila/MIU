import React, { useEffect, useState } from 'react';
import FullPost from '../../components/fullPost/FullPost';
import Post from '../../components/post/Post';
import './Blog.css'
import axios from 'axios';
import NewPost from '../../components/newPost/NewPost';

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [selectedId, setSelectedId] = useState(null);

    const headers={"Access-Control-Allow-Origin":"*"}

    useEffect(()=>axios.get("http://localhost:8080/posts",{headers})
    .then(response=>{
        console.log("Response Status : "+response.status);
        const list=response.data
        console.log("Fetched List: "+list[1]);
        if(response.status==200){
            setPosts(response.data);
        }
    }).catch(err=>console.log("Response Error: "+err)),[])

    
    const addPost=(post)=>{
        axios.post("http://localhost:8080/posts",post,{headers})
        .then(response=>{
            if(response==200)console.log("Succ");
            else console.log("Faill");
        }).catch(err=>console.log("AddError: "+err))
    }

    const addPostHandler=()=>{
        const Postt={
            id:5,
            title:"Ali",
            content:"Ibrahim",
            author:"KARIM"
        }
        addPost(Postt)
    }

    const postsList = posts.map(p => {
        return <Post
        key={p.id}
        id={p.id}
            title={p.title}
            author={p.author}
            clicked={() => setSelectedId(p.id)}
        />
    })

    return (
        <div>
            <section >
                <h1>Welcome to Blog Container</h1>
            </section>
            <section className="Posts">
                {postsList}
            </section>
            <section>
                <FullPost
                    id={selectedId}
                    title={{ ...posts.find(p => p.id == selectedId) }.title}
                    author={{ ...posts.find(p => p.id == selectedId) }.author}
                    contnet={{ ...posts.find(p => p.id == selectedId)}.content} />
            </section>
            <section>
                <button onClick={addPostHandler}>Add Ali Post</button>
            </section>

            <section>
                <NewPost/>
            </section>
        </div>
    );
}

export default Blog;