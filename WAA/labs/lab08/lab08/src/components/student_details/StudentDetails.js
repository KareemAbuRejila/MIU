import React from 'react';
import './StudentDetails.css'

const StudentDetails=(props)=>{
    let student=<p>Please Select One Student</p>
    if (props.id!=null) {
        student=(
            <div className="StudentDetails">
        <h5>Student</h5>
        <p>id: {props.id}</p>
        <p>name: {props.name}</p>
        <p>major: {props.major}</p>
    </div>
        );
    }
    return student;

}

export default StudentDetails;