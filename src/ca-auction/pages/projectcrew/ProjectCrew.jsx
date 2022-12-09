import React, { useEffect, useState } from "react";

import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import { Divider, TextField, Button, Box, Card, InputLabel, MenuItem, FormControl, Select, Autocomplete, InputAdornment, OutlinedInput } from "@mui/material";

import TextField_DatePicker from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import styled from 'styled-components'



const ProjectCrew = (props) => {
    const [projectName, setProjectName] = useState(""); //프로젝트 명
    const [projectContent, setProjectContent] = useState(""); //프로젝트 내용
    const [startDate, setStartDate] = useState(new Date()); //시작일자
    const [endDate, setEndDate] = useState(new Date()); //종료일자
    const [role, setRole] = useState("PL");  //투입인원 롤
    const [members, setMembers] = useState(new Map()); //투입인원의 롤 및 인원수 저장을 위한 맵    
    const [memberCount, setMemberCount] = useState("1"); //투입인원 수
    const [isVisibleRole, setIsVisibleRole] = useState(false); //추가입력 역할 TextField
    const [totalMembers, setTotalMembers] = useState(0); //총 투입인원 수

    useEffect(() => {
        console.log(members);
        var total = 0;

        members.forEach((value, key) => {
            total = total + parseInt(value);
        });

        setTotalMembers(total);

    }, [members]);

    const memberList = () => {
        var arr = [];

        members.forEach((value, key) => {
            arr.push(<Button variant="outlined" color="error" sx={{ width: 120, padding: 0.5, margin: 0.5, color: "orange", borderColor: "orange", borderRadius: 50, textTransform: "none", fontWeight: "bold" }} onClick={() => deleteTagItem(key)}>{key}({value})</Button>)
        });

        return arr
    }

    /*맵을 사용하기 위한 기능 */
    const add = (key, value) => {
        setMembers((prev) => new Map([...prev, [key, value]]));
    };


    const upsert = (key, value) => {
        setMembers((prev) => new Map(prev).set(key, value));
    };

    const del = (key) => {
        setMembers((prev) => {
            const newState = new Map(prev);
            newState.delete(key);
            return newState;
        });
    };

    const clear = () => {
        setMembers((prev) => new Map(prev.clear()));
    };

    const deleteTagItem = (key) => {
        del(key);
    }


    return (
        <div>
            <Card
                elevation={2}
                style={{ padding: 20, margin: 10, backgroundColor: 'rgb(255, 254, 247)' }}
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
                            value={projectName}
                            onChange={(e) => setProjectName(e.target.value)}
                        />
                        <br />
                        <TextField
                            label="프로젝트 내용"
                            multiline
                            rows={10}
                            variant="standard"
                            style={{ marginTop: 10, width: '100%' }}
                            value={projectContent}
                            onChange={(e) => setProjectContent(e.target.value)}
                        />
                        <br />
                        <br />
                        <Box >
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="시작 일자"
                                    value={startDate}
                                    locale={ko}
                                    inputFormat={"YYYY년 MM월 DD일"}
                                    mask={"____년 __월 __일"}
                                    onChange={(newValue) => setStartDate(newValue)}
                                    renderInput={(params) => <TextField_DatePicker {...params} />}
                                />
                            </LocalizationProvider>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="종료 일자"
                                    value={endDate}
                                    locale={ko}
                                    inputFormat={"YYYY년 MM월 DD일"}
                                    mask={"____년 __월 __일"}
                                    onChange={(newValue) => {
                                        if (newValue < startDate) {
                                            alert("123");
                                        } else {
                                            setEndDate(newValue);
                                        }
                                    }}
                                    renderInput={(params) => <TextField_DatePicker {...params} sx={{ ml: 2 }} error={endDate < startDate} />}
                                />
                            </LocalizationProvider>
                        </Box>
                        <br />

                        <Box className="flex">

                            <TextField
                                id="filled-number"
                                label="투입인원"
                                type="number"
                                variant="standard"
                                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                                value={memberCount}
                                onChange={(e) => {
                                    const min = 1;
                                    const max = 100;
                                    const value = Math.max(min, Math.min(max, Number(e.target.value)));
                                    setMemberCount(value)
                                }}

                            />

                            <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
                                <InputLabel>역할</InputLabel>
                                <Select
                                    value={role}
                                    label="역할"
                                    onChange={(e) => {
                                        setRole(e.target.value);
                                        if (e.target.value === "직접입력") {
                                            setIsVisibleRole(true);
                                        }
                                        else {
                                            setIsVisibleRole(false);
                                        }
                                    }}
                                >
                                    <MenuItem value="직접입력">
                                        <em>(직접입력)</em>
                                    </MenuItem>
                                    <MenuItem value={'PL'}>PL</MenuItem>
                                    <MenuItem value={'Backend'}>Backend</MenuItem>
                                    <MenuItem value={'Frontend'}>Frontend</MenuItem>
                                    <MenuItem value={'계정계'}>계정계</MenuItem>
                                    <MenuItem value={'기획'}>기획</MenuItem>
                                </Select>
                            </FormControl>
                            {isVisibleRole && <TextField size='small' style={{ color: "black", marginTop: 8, marginRight: 8, borderColor: 'black', fontSize: '1rem' }} value={role} onChange={(e) => setRole(e.target.value)}></TextField>}
                            <Button
                                className='w-96'
                                fontSize={'16px'}
                                variant='outlined'
                                size='small'
                                style={{ color: "black", marginTop: 10, marginBottom: 10, marginRight: 10, borderColor: 'black', fontSize: '1rem', width: '5rem' }}
                                onClick={(e) => add(role, memberCount)}
                            >
                                추가
                            </Button>

                            <TextField
                                value={totalMembers}
                                label="투입인원총원"
                                id="filled-start-adornment"
                                sx={{ width: '100px' }}
                                inputProps={{ min: 0, style: { textAlign: 'right' } }}
                                InputProps={{
                                    endAdornment: <InputAdornment sx={{ marginLeft: "3px" }} position="start">명</InputAdornment>,
                                }}
                                variant="standard"
                            />

                        </Box>

                        <div className="min-h-[50px] items-center">
                            {memberList()}
                        </div>
                        <Box sx={{ display: "flex", justifyContent: "right" }}>

                            <Button
                                type="submit"
                                className='w-96'
                                fontSize={'16px'}
                                variant='outlined'
                                size='small'
                                style={{ color: "black", marginTop: 10, marginBottom: 10, marginRight: 10, borderColor: 'black', fontSize: '1rem', width: '5rem' }}
                            //onClick={(e) => }
                            >
                                등록
                            </Button>
                        </Box>

                    </Box>

                </div>
            </Card >
        </div >
    );
}


export default ProjectCrew;