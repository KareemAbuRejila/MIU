import React, { useEffect, useState } from 'react';
import Student from '../../components/student/Student'
import StudentDetails from '../../components/student_details/StudentDetails';
import './Dashboard.css'

const Dashboard = () => {

    const [students, setStudents] = useState(
        [
            { id: 1, name: "Kareem",major:"IT" },
            { id: 2, name: "Reem" ,major:"Drawing"},
            { id: 3, name: "Soha" ,major:"Geographic"},
            { id: 4, name: "Samer" ,major:"Politic"}
        ]
    );
    const studentsList = students.map(s => {
        return <Student
            key={s.id}
            id={s.id}
            name={s.name} 
            major= {s.major}
            clicked= {()=>{
                selectStudentId(s.id);
            }}/>
    }
    )

    const [selectedStudentId,selectStudentId] = useState(null);
    const [newName,setNewName] = useState(null);

    const changeNameHandler=()=>{
        if(selectedStudentId!=null){
            const updatedList = [...students];
        updatedList.find(std=>std.id===selectedStudentId).name = newName;
        setStudents(updatedList)
        }
    }
    
    return (
        <div className="Dashboard">
            <section>
                {studentsList.length != 0 ? studentsList : "Nothing To show"}
            </section>
            <section>
                <p> Selected Student Id: {selectedStudentId}</p>
                <input type="text" hint="Enter New Name" onChange={(event)=>setNewName(event.target.value)}/>
                <button onClick={changeNameHandler}>ChangeName</button>
            </section>;
            
            <section>
            <StudentDetails
                key={selectedStudentId}
                id={selectedStudentId}
                name={{...students.find(stu=>stu.id==selectedStudentId)}.name}
                major={{...students.find(stu=>stu.id==selectedStudentId)}.major }
                />
            </section>
            
            
        </div>
    );
}

export default Dashboard;