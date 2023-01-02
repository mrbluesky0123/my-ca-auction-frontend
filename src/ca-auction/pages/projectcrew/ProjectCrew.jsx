import React, {createContext, useEffect, useState} from "react";
import "react-datepicker/dist/react-datepicker.css";
import {ko} from "date-fns/esm/locale";
import {Avatar, Badge, Box, Button, Card, Divider, TextField} from "@mui/material";
import {stringToColor} from "../../composable/color-util"

import TextField_DatePicker from '@mui/material/TextField';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import JobOffer from "./JobOffer";
import Tag from "./Tag";
import GroupIcon from '@mui/icons-material/Group';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import {datePickerToDateString} from "../../composable/date-util";
import dayjs from "dayjs";
import axios from "axios";
import callApi from "../../common/callApi";
import {useParams} from "react-router-dom";

export const Context = createContext();

const ProjectCrew = (props) => {
  const [projectID, setProjectID] = useState(""); //프로젝트 id
  const [projectName, setProjectName] = useState(""); //프로젝트 명
  const [projectContent, setProjectContent] = useState(""); //프로젝트 내용
  const [projectStartDate, setProjectStartDate] = useState(new Date()); //시작일자
  const [projectEndDate, setProjectEndDate] = useState(dayjs(new Date()).add(1, "day")); //종료일자
  const [members, setMembers] = useState(new Map()); //투입인원의 롤 및 인원수 저장을 위한 맵
  const [index, setIndex] = useState(0); //투입인원 생성 키
  const [summary, setSummary] = useState(new Map()); //투입인원의 롤 및 인원수의 서버리정보 저장을 위한 맵
  const [hasError, setHasError] = useState(false);
  const [isValidationJobOffer, setIsValidationJobOffer] = useState(false);
  const [isValidationJobOfferErrorMessage, setIsValidationJobOfferMessage] = useState("");
  const [isValidationDate, setIsValidationDate] = useState(false);
  const [isValidationDateErrorMessage, setIsValidationDateMessage] = useState("");
  const [isRegMode, setIsRegMode] = useState(true); //등록모드 인지 수정모드인지

  const [hashtagList, sethashagList] = useState([]);
  const [jobOfferinfo, setJobOfferinfo] = useState({});
  const [jobOfferList, setJobOfferList] = useState(new Map()); //구인의 정보를 저장함
  const params = useParams()

  useEffect(() => {
    console.log("최초한번", props.projectId);
    console.log("#!@#!@#!@#!@# ", params.projectId);
    //getData();
    if (params.projectId !== undefined) {
      setIsRegMode(false);
      getData();
    }
  }, []);

  useEffect(() => {
    setHasError(isValidationDate || isValidationJobOffer);
  }, [isValidationDate, isValidationJobOffer]);

  useEffect(() => {
    if (jobOfferinfo.id !== undefined) {
      addJobOfferList(jobOfferinfo.id, jobOfferinfo);
    }
  }, [jobOfferinfo]);

  useEffect(() => {
    dateValidation();
  }, [projectStartDate, projectEndDate]);

  const dateValidation = () => {
    if (datePickerToDateString(projectStartDate) >= datePickerToDateString(projectEndDate)) {
      setIsValidationDate(true);
      setIsValidationDateMessage("시작일자가 종료일자 이후 일 수 없습니다.");
    } else {
      setIsValidationDate(false);
      setIsValidationDateMessage("");
    }
  }

  const getData = async () => {
    let result = await callApi(
      {
        url: "http://localhost:8080/v1/projects/539056303037743104",
        method: "get"
      }
    );

    console.log("!@#!@#!@#!", result);

    {
      setProjectID(result.data.result.id);
      setProjectName(result.data.result.title);
      setProjectContent(result.data.result.content);
      setProjectStartDate(result.data.result.start_at);
      setProjectEndDate(result.data.result.end_at);
      sethashagList(result.data.result.tags);

      result.data.result.recruits.map(job => {
        console.log("job", job);

        add(job.id, <div key={job.id}><JobOffer akey={job.id}
                                                startDate={projectStartDate}
                                                endDate={projectEndDate}
                                                announcementSubject={job.title}
                                                announcementContent={job.content}
                                                announcementCloseDate={""}
                                                memberCount={job.crew_cnt}
                                                propDeleteFunction={
                                                  (akey) => {
                                                    // console.log("ProjectCrew del ", akey);
                                                    delSummary(akey)
                                                    del(akey);
                                                  }}

                                                propRoleAndCountAddFunction={
                                                  (akey, role, count) => {
                                                    // console.log("propRoleAndCountFunction", index, role, count);
                                                    let info = {
                                                      role: role,
                                                      count: count
                                                    }
                                                    addSummary(akey, info);
                                                  }
                                                }
        />
        </div>);

      })

    }


    console.log(result.data.result);
  }


  const sendDate = () => {

    if (hasError) {
      if (isValidationDate) {
        return alert(isValidationDateErrorMessage);
      }

      if (isValidationJobOffer) {
        return alert(isValidationJobOfferErrorMessage);
      }

    }


    let data = {
      title: projectName,
      content: projectContent,
      start_at: datePickerToDateString(projectStartDate),
      end_at: datePickerToDateString(projectEndDate),
      recruits: [],
      tags: []
    }

    for (let value of jobOfferList.values()) {
      if (value.crew_cnt <= 0) {
        return alert("공고의 투입 인원을 확인하세요.");
      }

      data.recruits.push(value);
    }

    data.tags = hashtagList;

    callApi({
      url: isRegMode ? "http://localhost:8080/v1/projects" : "",
      method: "post",
      data: data
    })

    // axios.post(
    //   "http://localhost:8080/v1/projects",
    //   data, {}
    // ).then(function (response) {
    //
    //   console.log("response.data.code", response.status);
    //   if (response.status === 201) {
    //     alert("Ok");
    //   }
    // })
    //   .catch(function (error) {
    //     console.log(error);
    //     if (error !== undefined) {
    //       let errorMsg = "";
    //       errorMsg = errorMsg + error.response.data.error_info.err_cd + " " + error.response.data.error_info.err_msg_desc;
    //
    //       if (error.response.data.info !== undefined) {
    //         error.response.data.info.map(info => {
    //           errorMsg = errorMsg + " " + info.message;
    //         })
    //       }
    //       alert(errorMsg);
    //     }
    //   })

    console.log("sendDate", data);
  }

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
          <div className={"p-1"} key={key}>
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

  const addJobOfferList = (key, value) => {
    setJobOfferList((prev) => new Map([...prev, [key, value]]));
  };

  const delJobOfferList = (key) => {
    setJobOfferList((prev) => {
      const newState = new Map(prev);
      newState.delete(key);
      return newState;
    });
  };

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
    console.log("add", key, value);
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

  const handleSumit = (e) => {
    e.preventDefault();
    sendDate();
  }


  return (
    <Context.Provider
      value={{
        projectStartDate,
        projectEndDate,
        setJobOfferinfo,
        hashtagList,
        sethashagList,
        setIsValidationJobOffer,
        setIsValidationJobOfferMessage
      }}>
      <div>
        <form onSubmit={handleSumit}>
          <div className="grid grid-rows-1 grid-cols-3">

            <div>

              <Card
                elevation={2}
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
                      inputProps={{readOnly: !isRegMode}}
                      label="프로젝트명"
                      variant="standard"
                      style={{marginTop: 10, width: '40%'}}
                      value={projectName}
                      onChange={(e) => setProjectName(e.target.value)}
                    />
                    <br/>
                    <TextField
                      size="small"
                      required
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
                          value={projectStartDate}
                          locale={ko}
                          inputFormat={"YYYY년 MM월 DD일"}
                          mask={"____년 __월 __일"}
                          onChange={(newValue) => {

                            setProjectStartDate(datePickerToDateString(newValue));
                            // dateValidation();

                          }}
                          renderInput={(params) => <TextField_DatePicker
                            size="small" {...params}
                            error={isValidationDate}
                            helperText={isValidationDateErrorMessage}
                          />}
                        />
                      </LocalizationProvider>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          label="종료 일자"
                          value={projectEndDate}
                          locale={ko}
                          inputFormat={"YYYY년 MM월 DD일"}
                          mask={"____년 __월 __일"}
                          onChange={(newValue) => {
                            setProjectEndDate(datePickerToDateString(newValue));
                            // dateValidation();
                          }}
                          renderInput={(params) => <TextField_DatePicker
                            size="small" {...params}
                            sx={{ml: 2}}
                            error={isValidationDate}/>}
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
                        // onClick={(e) => {
                        //   // sendDate();

                        // }}
                      >
                        {isRegMode ? '등록' : '수정'}
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
                                                            startDate={projectStartDate}
                                                            endDate={projectEndDate}
                                                            memberCount={1}
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
                  <Box sx={{height: '100px'}}></Box>
                </div>

              </Card>

            </div>

          </div>
        </form>
      </div>
    </Context.Provider>
  );
}


export default ProjectCrew;
