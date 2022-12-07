import React, { useEffect, useState, forwardRef } from "react";
import {
    Text,
    Input,
    Wrap,
    WrapItem,
} from '@chakra-ui/react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import { FaCalendarAlt } from 'react-icons/fa';
import { Typography, Divider, TextField, Button, Box, Card, InputLabel, MenuItem, FormControl, Select } from "@mui/material";

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
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

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
            startIcon={<FaCalendarAlt />}
            //colorScheme='blue'
            variant='outlined'
            onClick={onClick}
            //inline='true'
            ref={ref}
            style={{color: "black", marginTop: 10, marginBottom: 10, borderColor: 'black', fontSize: '1rem'}}
        >
            {value}
        </Button>
    ));

    return (
        <div className='bg-amber-900'>
            <Card
                elevation={2}
                style={{padding: 20, margin: 10, backgroundColor: 'rgb(255, 254, 247)'}}
            >
                <div className="block">
                    <div className="text-2xl font-bold">
                        프로젝트 구인
                    </div>
                    <div className='my-2.5'>
                        <Divider />
                    </div>
                    <Box p={1}>
                        <TextField
                            required
                            label="프로젝트명"
                            variant="standard"
                            style={{ marginTop: 10, width: '40%' }}
                        />
                        <br/>
                        <TextField
                            label="프로젝트 내용"
                            multiline
                            rows={4}
                            variant="standard"
                            style={{ marginTop: 10, width: '100%' }}
                        />
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

                        <Box className="flex">

                            <TextField
                                id="filled-number"
                                label="투입인원"
                                type="number"
                                variant="standard"
                                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                            />

                            <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
                                <InputLabel>역할</InputLabel>
                                <Select
                                    value={age}
                                    label="Age"
                                    onChange={handleChange}
                                >
                                    <MenuItem value="">
                                    <em>(선택하지않음)</em>
                                    </MenuItem>
                                    <MenuItem value={'pl'}>PL</MenuItem>
                                    <MenuItem value={'backend'}>Backend</MenuItem>
                                    <MenuItem value={'frontend'}>Frontend</MenuItem>
                            </Select>
                            </FormControl>
                            <Button
                                className='w-96'
                                fontSize={'16px'}
                                variant='outlined'
                                size="small"
                                style={{color: "black", marginTop: 10, marginBottom: 10, borderColor: 'black', fontSize: '1rem', width: '5rem'}}
                            >
                                추가
                            </Button>
                        </Box>
                    </Box>
                </div>
            </Card>
        </div>
    );
}

export default ProjectCrew;
