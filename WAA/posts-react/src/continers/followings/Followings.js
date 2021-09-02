import "./Followings.css"
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { APIConfig } from '../../store/API-Config';
import Post from "../../components/post/Post";
import {LikedPosts} from '../../store/LikedPosts'


const Followings = (props) => {

    const APIs=useContext(APIConfig);
    const postsAPI=APIs.postsAPI;
    const headersAPI=APIs.headersAPI;
    


    const [likedPosts, setLikedPosts] = useState([]);
    const {likes,setLikes}=useContext(LikedPosts);



    useEffect(()=>{
        // likes.forEach(id => {
        //     axios.get(postsAPI+"/"+id,headersAPI)
        //     .then(resp=>{
        //         if(resp.status==200){
        //             const updated=[...likedPosts];
        //             updated.push(resp.data);
        //             setLikedPosts(updated);
        //             console.log(likedPosts);
        //         }else
        //         console.log("Something Wrong");

        // }).catch(err => console.log("Response Error: " + err));
        // });

        axios.get(postsAPI,headersAPI)
        .then(resp=>{
            if(resp.status==200){
                const tempList=[];
                likes.forEach(id=>{
                    tempList.push(resp.data.find(p=>p.id==id))
                })
                setLikedPosts(tempList) 
            }
        })
    },[likes]);    

    const postsList = likedPosts.map(p => {
        return <Post
            key={p.id}
            id={p.id}
            title={p.title}
            author={p.author}
        />
    })

    return ( 
        <div>
        <h1>Followings Container</h1>
         <section className="Followings">
            {postsList}
        </section>
        {/* <section>
            <FullPost
                id={selectedId}
                title={{ ...likedPosts.find(p => p.id == selectedId) }.title}
                author={{ ...likedPosts.find(p => p.id == selectedId) }.author}
                contnet={{ ...likedPosts.find(p => p.id == selectedId)}.content} />
        </section> */}
    </div>
     );
}
 
export default Followings;