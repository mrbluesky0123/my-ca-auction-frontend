import React, {useEffect, useRef,createContext, useState} from "react";
import "react-datepicker/dist/react-datepicker.css";
import {ko} from "date-fns/esm/locale";
import {
  Box,
  Button,
  Card,
  Divider,
  TextField,
  Avatar,
  Badge
} from "@mui/material";

import {deepOrange, deepPurple} from '@mui/material/colors';

import TextField_DatePicker from '@mui/material/TextField';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import JobOffer from "./JobOffer";
import Tag from "./Tag";
import GroupIcon from '@mui/icons-material/Group';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

export const Context = createContext();

const ProjectCrew = (props) => {
  const [projectName, setProjectName] = useState(""); //프로젝트 명
  const [projectContent, setProjectContent] = useState(""); //프로젝트 내용
  const [startDate, setStartDate] = useState(new Date()); //시작일자
  const [endDate, setEndDate] = useState(new Date()); //종료일자


  const [members, setMembers] = useState(new Map()); //투입인원의 롤 및 인원수 저장을 위한 맵
  const [index, setIndex] = useState(0);

  const [summary, setSummary] = useState(new Map()); //투입인원의 롤 및 인원수 저장을 위한 맵

  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }


  useEffect(() => {
      // console.log("summary", summary);
    }, [summary]
  )
  const memberList = () => {
    const arr = [];

    members.forEach((value, key) => {
      arr.push(value);
    });
    return arr
  }

  const summaryList = () => {
    const arr = [];
    const counter = {};

    for (let value of summary.values()) {
      if (value.role in counter) {
        counter[value.role] = parseInt(counter[value.role]) + parseInt(value.count);
      } else {
        counter[value.role] = value.count;
      }

    }

    Object.keys(counter).forEach(key => {
        console.log(key);
        arr.push(
          // <Button sx={{textTransform: 'unset'}}> {/*{counter[key]}</Button>*/}
          <div className={"p-1"}>
            <Badge badgeContent={counter[key]} color="secondary">
              <Avatar sx={{
                bgcolor: stringToColor(key),
                fontSize: 15
              }}>{key.substring(0, 2)}</Avatar>
            </Badge>
          </div>
        );
      }
    )

    return arr
  }

  const addSummary = (key, value) => {
    setSummary((prev) => new Map([...prev, [key, value]]));
  };

  const delSummary = (key) => {
    setSummary((prev) => {
      const newState = new Map(prev);
      newState.delete(key);
      return newState;
    });
  };


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
    <Context.Provider value={{projectName}}>
      <div className="grid grid-rows-1 grid-cols-3">
        <div>
          <Card
            elevation={0}
            style={{
              padding: 20,
              margin: 10,
              backgroundColor: 'rgb(255, 254, 247)',
              height: "80vh"
            }}
          >
            <div className="block">
              <div className="text-2xl font-bold">
                프로젝트 등록<AccountTreeIcon/>
              </div>
              <div className='my-2.5'>
                <Divider/>
              </div>
              <Box p={1}>
                <TextField
                  size="small"
                  required
                  label="프로젝트명"
                  variant="standard"
                  style={{marginTop: 10, width: '40%'}}
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                />
                <br/>
                <TextField
                  size="small"
                  label="프로젝트 내용"
                  multiline
                  rows={10}
                  variant="standard"
                  style={{marginTop: 10, width: '100%'}}
                  value={projectContent}
                  onChange={(e) => setProjectContent(e.target.value)}
                />
                <br/>
                <br/>
                <Box>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="시작 일자"
                      value={startDate}
                      locale={ko}
                      inputFormat={"YYYY년 MM월 DD일"}
                      mask={"____년 __월 __일"}
                      onChange={(newValue) => setStartDate(newValue)}
                      renderInput={(params) => <TextField_DatePicker
                        size="small" {...params} />}
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
                          alert("종료일자를 확인해주세요. 시작일자보다 전일자는 안되요.");
                        } else {
                          setEndDate(newValue);
                        }
                      }}
                      renderInput={(params) => <TextField_DatePicker {...params}
                                                                     size="small"
                                                                     sx={{ml: 2}}
                                                                     error={endDate < startDate}/>}
                    />
                  </LocalizationProvider>
                </Box>
                <div>
                  <Tag/>
                </div>


                <Box sx={{display: "flex", justifyContent: "right"}}>
                  <Button
                    type="submit"
                    className='w-96'
                    fontSize={'16px'}
                    variant='outlined'
                    size='small'
                    style={{
                      marginTop: 10,
                      marginBottom: 10,
                      marginRight: 10,
                      fontSize: '1rem',
                      width: '5rem'
                    }}
                    //onClick={(e) => }
                  >
                    등록
                  </Button>
                </Box>
              </Box>
            </div>
          </Card>
        </div>
        <div className={"col-span-2"}>
          <Card
            elevation={2}
            style={{
              padding: 20,
              margin: 10,
              backgroundColor: 'rgb(255, 254, 247)',
              height: "80vh"
            }}
          >
            <div className="text-2xl font-bold">
              프로젝트 구인 등록 <GroupIcon/>
            </div>

            <div className='my-2.5'>
              <Divider/>
            </div>
            <div className={"flex"}>
              <Button
                type="submit"
                className='w-96'
                fontSize={'16px'}
                variant='outlined'
                size='small'
                style={{
                  marginTop: 10,
                  marginBottom: 10,
                  marginRight: 10,
                  fontSize: '1rem',
                  width: '5rem'
                }}
                onClick={(e) => {
                  setIndex(index + 1);
                  add(index, <div key={index}><JobOffer akey={index}
                                                        startDate={startDate}
                                                        endDate={endDate}
                                                        propDeleteFunction={
                                                          (akey) => {
                                                            // console.log("ProjectCrew del ", akey);
                                                            delSummary(akey)
                                                            del(akey);
                                                          }}

                                                        propRoleAndCountAddFunction={
                                                          (index, role, count) => {
                                                            // console.log("propRoleAndCountFunction", index, role, count);
                                                            let info = {
                                                              role: role,
                                                              count: count
                                                            }
                                                            addSummary(index, info);
                                                          }
                                                        }
                  />
                  </div>);
                }}>추가</Button>
              {summaryList()}
            </div>

            <div className={'h-[70vh] overflow-y-auto'}>
              {memberList()}
            </div>

          </Card>

        </div>
      </div>
    </Context.Provider>
  );
}


export default ProjectCrew;
