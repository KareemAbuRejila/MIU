import React from 'react';
import './Student.css'

const Student=(props)=>{
    return (
        <div className="Student" onClick={props.clicked}>
            <h5>Student</h5>
            <p>ID: {props.id}</p>
            <p>Name: {props.name}</p>
            <p>Major: {props.major}</p>
        </div>
    );
}

export default Student;