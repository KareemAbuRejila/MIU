import axios from 'axios';
import React, { useState } from 'react';
import './NewPost.css'

const API_POSTS="http://localhost:8080/posts/";
const HEADERS={"Access-Control-Allow-Origin":"*"};
const NewPost = () => {
    const [post,setPost]=useState({
        title:"",
        content:"",
        author:""
    });

    const addPost=()=>{
        axios.post(API_POSTS,post,HEADERS)
        .then(resp=>resp.status==200?console.log("Post Added Successfull"):console.log("Something Wrong:"+resp.status))
        .catch(err=>console.log("Add Error: "+err));
    }
    return ( 
        <div className="NewPost">
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" onChange={(event)=>setPost({...post,title:event.target.value})}  />
                <label>Content</label>
                <textarea rows="4" onChange={(event)=>setPost({...post,content:event.target.value})}/>
                <label>Author</label>
                <select onChange={(event)=>setPost({...post,author:event.target.value})} >
                    <option value="null">Please Select Your Author</option>
                    <option value="Dean">Dean</option>
                    <option value="Zaineh">Zaineh</option>
                    <option value="Yasmeen">Yasmeen</option>
                </select>
                <button onClick={addPost}>Add Post</button>
            </div>
     );
}
 
export default NewPost;