import React,{ useEffect, useState } from "react";
import Members from "./Members";

function ProjectReg(props){
    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const [term, setTerm] = useState("");
    const [role, setRole] = useState("PL");  //투입인원 롤
    const [memberCount, setMemberCount] = useState(""); //투입인원 수
    const [addMember, setAddMember] = useState("");
    const [members, setMembers] = useState([]);
    const [statement, setStatement] = useState(null);

    // useEffect(() => {
        
    // }, [members])

    const handleChangeName = (event) => {
        // setName(event.target.value);
        // event.preventDefault();
    };

    const handleChangeContent = (event) => {
        // setContent(event.target.value);
        // event.preventDefault();
    };

    const handleChangeTerm = (event) => {
        // setTerm(event.target.value);
        // event.preventDefault();
    };

    const handleChangeMemberCount = (event) => {
        console.log("handleChangeMemberCount");
        setMemberCount(event.target.value);
        setAddMember("");
        // event.preventDefault();
    };

    const handleChangeMembers = (event) => {
        // console.log("handleChangeMembers");
        // setRole(event.target.value);  
        // setAddMember("");      
        // event.preventDefault();
    };

    const handleClickButton = (event) => {
        console.log("handleClickButton");   
        
        setMembers([...members, { role: role,
            count: memberCount
        }])
        members.forEach((m) => {
            console.log("@###", m)
        })
        console.log("#####", typeof(members))
        // event.preventDefault();
    };

    const handleSubmit = (event) => {
        alert(`이름: ${name}, `);        
        event.preventDefault();
    };

    return (
        <>
            <label>
                제목 : <input type="text" value={name} onChange={handleChangeName} />
            </label>
            <br />
            <label>
                내용 : <input type="text" value={content} onChange={handleChangeContent} />
            </label>
            <br />
            <label>
                기간 : <input type="text" value={term} onChange={handleChangeTerm}/>
            </label>
            <br />
            <label>
                투입인원 : 
                <input type="text" value={memberCount} onChange={handleChangeMemberCount} />
                <select value={role} onChange={handleChangeMembers} >
                    <option value="PL">PL</option>
                    <option value="BackEnd">BackEnd</option>
                </select>  
                <button onClick={handleClickButton}>추가</button>
            </label>

            {/* {statement} */}
            {members.map((m) => {
                return (
                <>
                    <p>{m.role}, {m.count}</p>
                </>
                )
            })}
            
            <br />
            <button type="submit">제출</button>
        </>
    );
}

export default ProjectReg;