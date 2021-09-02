import axios from 'axios';
import './NewPost.css';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { APIConfig } from '../../store/API-Config';

const NewPost = (props) => {

    const APIs=useContext(APIConfig);
    const postsAPI=APIs.postsAPI;
    const headersAPI=APIs.headersAPI;

    const newPostFrom=useRef();
    const titleVal=useRef();

    const addPost=()=>{
            const form=newPostFrom.current;
            const post={
                title:form["title"].value,
                content:form["content"].value,
                author:form["author"].value
            }
            console.log(post);
        axios.post(postsAPI,post,headersAPI)
        .then(resp=>
            resp.status==200?
            props.history.push('/posts')
            :console.log("Something Wrong:"+resp.status))
        .catch(err=>console.log("Add Error: "+err));
    }
    return ( 
        <div className="NewPost">
            <form ref={newPostFrom}>
            <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" name={"title"} label={'title'} />
                <label>Content</label>
                <textarea rows="4" name={"content"} label={'content'}/>
                <label>Author</label>
                <select name={"author"}label={'author'} >
                    <option value="null">Please Select Your Author</option>
                    <option value="Dean">Dean</option>
                    <option value="Zaineh">Zaineh</option>
                    <option value="Yasmeen">Yasmeen</option>
                </select>
            </form>
            <button onClick={addPost}>Add Post</button>
           
                
            </div>
     );
}
 
export default NewPost;