import React, { useEffect, useState, forwardRef } from "react";
import {
    Text,
    Input,
    Stack,
    InputGroup,
    InputLeftElement,
    Card,
    InputRightElement,
    Divider,
    Box,
    Textarea,
    Button,
    Select,
    Wrap,
    WrapItem,
} from '@chakra-ui/react';
//import Calendar from "react-calendar";
//import 'react-calendar/dist/Calendar.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { PhoneIcon, CheckIcon, } from '@chakra-ui/icons';
import { ko } from "date-fns/esm/locale";
import { FaCalendarAlt } from 'react-icons/fa';

const ProjectCrew = (props) => {
    const [projectName, setProjectName] = useState("");
    const [content, setContent] = useState("");
    const [term, setTerm] = useState("");
    const [role, setRole] = useState("PL");  //투입인원 롤
    const [memberCount, setMemberCount] = useState("0"); //투입인원 수
    const [addMember, setAddMember] = useState("");
    const [members, setMembers] = useState([]);
    const [statement, setStatement] = useState(null);
    //const [value, onChange] = useState(new Date());
    const [dateRange, setDateRange] = useState([new Date(), new Date()]);
    const [startDate, endDate] = dateRange;


    const handleChangeProjectName = (event) => {
        setProjectName(event.target.value);
    };

    const handleChangeContent = (event) => {
        setContent(event.target.value);

    };

    const handleChangeTerm = (event) => {

    };

    const handleChangeMemberCount = (event) => {
        console.log("handleChangeMemberCount");
        const min = 1;
        const max = 100;
        const value = Math.max(min, Math.min(max, Number(event.target.value)));
        setMemberCount(value);
    };

    const handleChangeMembers = (event) => {
        setRole(event.target.value);
    };

    const handleClickButton = (event) => {
        console.log("handleClickButton");

        setMembers([...members, {
            role: role,
            count: memberCount
        }])
        members.forEach((m) => {
            console.log("@###", m)
        })
        console.log("#####", typeof (members))
        // event.preventDefault();
    };

    const handleSubmit = (event) => {
        alert(`이름: ${projectName}, `);
        event.preventDefault();
    };



    const CalenderButton = forwardRef(({ value, onClick }, ref) => (
        <Button
            className='w-96'
            fontSize={'16px'}
            leftIcon={<FaCalendarAlt />}
            //colorScheme='blue'
            variant='outline'
            onClick={onClick}
            //inline='true'
            ref={ref}>
            {value}
        </Button>
    ));

    return (
        <div>
            <Card className='w' bg={"rgb(255, 254, 247)"} p={5} m={3}>
                <div className="block">
                    <Text className="text-2xl font-bold">
                        프로젝트 구인
                    </Text>
                    <Divider />
                    <Box p={3}>
                        <Text className="text-sm font-bold " p={1}>프로젝트명</Text>
                        <Input
                            //width='250px'
                            placeholder='프로젝트 명'
                            size='sm'
                            onChange={handleChangeProjectName}
                            value={projectName}
                            bg={'white'}
                            p={1}
                        />
                        <Text className="text-sm font-bold" p={1}>내용</Text>
                        <Textarea
                            //width='250px'
                            height='250px'
                            placeholder='내용'
                            size='sm'
                            onChange={handleChangeContent}
                            value={content}
                            bg={'white'}
                            p={1}
                        />
                        <Text className="text-sm font-bold" p={1}>기간</Text>
                        <DatePicker
                            className='text-base w-64'
                            selectsRange={true}
                            startDate={startDate}
                            endDate={endDate}
                            dateFormat="yyyy년 MM월 dd일"
                            locale={ko}
                            onChange={(update) => {
                                setDateRange(update);
                            }}
                            customInput={<CalenderButton />}
                        />

                        <Text className="text-sm font-bold" p={1}>투입인원 및 역활</Text>
                        <Wrap>
                            <WrapItem>
                                <Input
                                    type='number'
                                    min='0'
                                    max='100'
                                    width='250px'
                                    placeholder='투입인원'
                                    size='sm'
                                    onChange={handleChangeMemberCount}
                                    value={memberCount}
                                    p={1}
                                />
                            </WrapItem>
                            <WrapItem>
                                <Select value={role} onChange={handleChangeMembers} size='sm' >
                                    <option value="PL">PL</option>
                                    <option value="BackEnd">BackEnd</option>
                                </Select>
                            </WrapItem>
                            <WrapItem>
                                <Button size='sm'>추가</Button>
                            </WrapItem>
                        </Wrap>
                    </Box>
                </div>
            </Card>
        </div>
    );
}

export default ProjectCrew;