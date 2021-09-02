import React, { useContext, useEffect, useRef, useState } from 'react';
import { StatusStore } from '../../store/Status';
import './Status.css'

const StatusComp = () => {

    const newPostForm=useRef();

    const {savedSatus,setSaveStatus}=useContext(StatusStore);
    

    useEffect(()=>{
        const form=newPostForm.current;

        form["statusMsg"].value=savedSatus;
    },[])

    const saveStatus=()=>{
        const form=newPostForm.current;
        const status=form["statusMsg"].value;
        setSaveStatus(status)
    }

    return ( 
        <div className="Status">
            <h1>Status</h1>
                        
            <form ref={newPostForm}>
                <textarea  rows="4" label={'statusMsg'} name={'statusMsg'}  
                // onChange={(event) => setSaveStatus(   event.target.value )}
                   />

            </form>
            
            <button onClick={saveStatus}>Update Status </button>
            <label>Status: {savedSatus} </label>

        </div>
     );
}
 
export default StatusComp;