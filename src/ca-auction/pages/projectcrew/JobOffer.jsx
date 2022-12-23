import React, {useEffect, createContext, useState, useContext} from "react";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';


import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField, useMediaQuery
} from "@mui/material";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {ko} from "date-fns/esm/locale";
import TextField_DatePicker from "@mui/material/TextField";
import NumberOfApplicants from "./NumberOfApplicants";
import {useTheme} from "@mui/material/styles";
import {Context} from './ProjectCrew'


const JobOffer = (props) => {
  const theme = useTheme();
  const [memberCount, setMemberCount] = useState("1"); //투입인원 수

  const [announcementSubject, setAnnouncementSubject] = useState(""); //모집공고제목
  const [announcementContent, setAnnouncementContent] = useState(""); //모집내용
  const [announcementCloseDate, setAnnouncementCloseDate] = useState(props.endDate); //공고마감일자
  const [role, setRole] = useState("PL");  //투입인원 롤
  const [startDate, setStartDate] = useState(props.startDate); //투입시작일자
  const [endDate, setEndDate] = useState(props.endDate); //투입종료일자

  const [isVisibleRole, setIsVisibleRole] = useState(false); //추가입력 역할 TextField
  const isLargeOrMore = useMediaQuery(theme.breakpoints.up('xl'));
  const {projectStartDate, projectEndDate} = useContext(Context);
  const {setJobOfferinfo} = useContext(Context);


  useEffect(
    () => {
      props.propRoleAndCountAddFunction(props.akey, role, memberCount);
    }, [memberCount, role]
  )

  useEffect(() => {
    let jobOfferInfo = {
      id: props.akey,
      announcementSubject: announcementSubject,
      announcementCloseDate: announcementCloseDate,
      announcementContent: announcementContent,
      role: role,
      startDate: startDate,
      endDate: endDate
    }

    setJobOfferinfo(jobOfferInfo);

  }, [announcementSubject, announcementCloseDate, announcementContent, role, startDate, endDate])

  useEffect(() => {
    console.log('projectStartDate ', projectStartDate);
    console.log('projectEndDate ', projectEndDate);
    console.log('startDate ', startDate);
    console.log('endDate ', endDate);

  }, [projectStartDate, projectEndDate, startDate, endDate])
  return (
    <div>
      <div className="grid grid-rows-6 grid-cols-[3rem_repeat(11,1fr)] gap-x-1 mt-8">
        <div className={"row-span-6 col-span-1 "}>
          <IconButton color="primary" aria-label="롤 삭제"
                      onClick={(e) => {
                        props.propDeleteFunction(props.akey);
                      }}>
            <RemoveCircleOutlineIcon/>
          </IconButton>
        </div>
        <div className={"col-span-6"}>
          <TextField
            label="공고제목2"
            size="small"
            value={announcementSubject}
            sx={{width: '100%'}}
            onChange={(e) => setAnnouncementSubject(e.target.value)}
          ></TextField>
        </div>
        <div className={"row-span-6 col-span-5 pl-5"}>
          <NumberOfApplicants/>
        </div>
        <div className={"row-span-1 col-span-6"}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              className={"w-1/2"}
              label="공고 마감 일자"
              value={announcementCloseDate}
              locale={ko}
              inputFormat={"YYYY년 MM월 DD일"}
              mask={"____년 __월 __일"}
              onChange={(newValue) => setAnnouncementCloseDate(newValue)}
              renderInput={(params) => <TextField_DatePicker
                size="small" {...params} />}
            />
          </LocalizationProvider>
        </div>
        <div className={isVisibleRole ? "row-span-1 col-span-1" : "row-span-1 col-span-2"}>
          <TextField
            id="filled-number"
            label="투입인원"
            type="number"
            variant="standard"
            size="small"
            inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}
            value={memberCount}
            // sx={{width: '25%'}}
            onChange={(e) => {
              const min = 0;
              const max = 100;
              const value = Math.max(min, Math.min(max, Number(e.target.value)));
              setMemberCount(value);
            }}
          />
        </div>
        {/*<div className={isVisibleRole ? "row-span-1 col-span-2" : "row-span-1 col-span-4"}>*/}
        <div className={"row-span-1 col-span-2"}>
          <FormControl sx={{width: '100%', mt: 0.75}} size="small">
            <InputLabel>역할</InputLabel>
            <Select
              value={role}
              label="역할"
              onChange={(e) => {
                console.log("Select ", e.target.value);
                setRole(e.target.value);
                if (e.target.value === "직접입력") {
                  setIsVisibleRole(true);
                } else {
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
              {isVisibleRole && <MenuItem value={role}>{role}</MenuItem>}
            </Select>
          </FormControl>
        </div>
        {isVisibleRole &&
          <div className={"row-span-1 col-span-3"}>
            <TextField sx={{mt: 0.75, width: '100%'}} size='small'
                       label="직접입력"
                       value={role}
                       onChange={(e) => setRole(e.target.value)}></TextField>
          </div>}
        <div className={"row-span-2 col-span-6"}>
          <TextField size={"small"}
                     multiline
                     rows={4}
                     sx={{ml: "0px", width: '100%'}}
                     label="모집내용"
                     onChange={(e) => setAnnouncementContent(e.target.value)}/>
        </div>
        <div className={"col-span-3"}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="투입 시작 일자"
              value={startDate}
              locale={ko}
              inputFormat={"YYYY년 MM월 DD일"}
              mask={"____년 __월 __일"}
              onChange={(newValue) => {
                if (newValue < endDate) {
                  setStartDate(newValue)
                } else {
                  alert("투입일자를 확인해주세요.");
                }
              }}
              renderInput={(params) => <TextField_DatePicker
                size="small" sx={{
                width: '100%', mt: 2
              }}{...params} error={projectStartDate > startDate}/>}
            />
          </LocalizationProvider>
        </div>
        <div className={"col-span-3"}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="투입 종료 일자"
              value={endDate}
              locale={ko}
              inputFormat={"YYYY년 MM월 DD일"}
              mask={"____년 __월 __일"}
              onChange={(newValue) => {
                if (newValue >= startDate) {
                  setEndDate(newValue);
                } else {
                  alert("투입일자를 확인해주세요.");
                }
              }}
              renderInput={(params) =>
                <TextField_DatePicker {...params}
                                      size="small"
                                      sx={{width: '100%', mt: 2}}
                                      {...params}
                                      error={(endDate < startDate) || (endDate > projectEndDate)}/>}
            />
          </LocalizationProvider>
        </div>
      </div>
      <div className={"h-2"}></div>

    </div>

  );

}


export default JobOffer;
