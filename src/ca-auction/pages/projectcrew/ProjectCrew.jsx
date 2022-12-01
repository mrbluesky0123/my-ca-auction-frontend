import React,{ useEffect, useState } from "react";
import {
    Text,
    Input,
    Stack,
    InputGroup,
    InputLeftElement,
    Card,
    InputRightElement,
    Divider,
    Box
} from '@chakra-ui/react'
import {PhoneIcon,CheckIcon,} from '@chakra-ui/icons'

const ProjectCrew = (props) => {
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
        <div>
            <Card className='w-2/3' bg={"rgb(255, 254, 247)"} p={5} m={3}>
                <div className="block">
                    <Text className="text-2xl font-bold">
                        프로젝트 구인
                    </Text>
                    <Divider />
                    <Box p={3}>
                        <Text className="text-sm font-bold" p={1}>프로젝트명</Text>
                        <Input 
                            width='250px'
                            placeholder='프로젝트명' 
                            size='sm' 
                            onChange={handleChangeName} 
                            value={name}
                            bg={'white'}
                            p={1}
                        />
                        <Text className="text-sm" p={1}>기간</Text>
                        <Input 
                            width='250px'
                            placeholder='기간' 
                            size='sm' 
                            onChange={handleChangeName} 
                            value={name}
                            p={1}
                        />
                        <Text className="text-sm" p={1}>투입인원</Text>
                        <Input 
                            width='250px'
                            placeholder='투입인원' 
                            size='sm' 
                            onChange={handleChangeName} 
                            value={name}
                            p={1}
                        />
                        <Text className="text-sm" p={1}>역할</Text>
                        <Input 
                            width='250px'
                            placeholder='역할' 
                            size='sm' 
                            onChange={handleChangeName} 
                            value={name}
                            p={1}
                        />
                        </Box>
                </div>
            </Card>
        </div>
    );
}

export default ProjectCrew;