import React,{ useEffect, useState } from "react";
import Members from "./Members";
import {
    Text,
    Input,
    Stack,
    InputGroup,
    InputLeftElement,
    
    InputRightElement,
    
} from '@chakra-ui/react'
import {PhoneIcon,CheckIcon,} from '@chakra-ui/icons'

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
        <div className="block">            
            <Text className="text-sm" p={1}>프로젝트명</Text>
            <Input 
                width='250px'
                placeholder='프로젝트명' 
                size='sm' 
                onChange={handleChangeName} 
                value={name}
                p={1}
            />
            <Text className="text-sm" p={1}>내용</Text>
            <Input 
                width='250px'
                placeholder='프로젝트명' 
                size='sm' 
                onChange={handleChangeName} 
                value={name}
                p={1}
            />
            <Text className="text-sm" p={1}>내용</Text>
            <Input 
                width='250px'
                placeholder='프로젝트명' 
                size='sm' 
                onChange={handleChangeName} 
                value={name}
                p={1}
            />
            <Text className="text-sm" p={1}>내용</Text>
            <Input 
                width='250px'
                placeholder='프로젝트명' 
                size='sm' 
                onChange={handleChangeName} 
                value={name}
                p={1}
            />
        </div>
    );
}

export default ProjectReg;