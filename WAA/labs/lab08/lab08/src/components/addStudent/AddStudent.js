import React from 'react';

const AddStudent=()=>{

    return(
        <div>
            <h1>Add Student </h1>
            <section>
                <label> Name:
                    <input type="text"></input>
                </label>
                <label> Major:
                    <input type="text"></input>
                </label>
            </section>
        </div>
    )
}

export default AddStudent;