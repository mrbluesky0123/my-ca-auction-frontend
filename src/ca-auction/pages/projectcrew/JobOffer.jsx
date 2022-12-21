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
  const [role, setRole] = useState("PL");  //투입인원 롤
  const [startDate, setStartDate] = useState(props.startDate); //투입시작일자
  const [endDate, setEndDate] = useState(props.endDate); //투입종료일자
  const [announcementCloseDate, setAnnouncementCloseDate] = useState(props.endDate); //투입종료일자
  const [isVisibleRole, setIsVisibleRole] = useState(false); //추가입력 역할 TextField
  const isLargeOrMore = useMediaQuery(theme.breakpoints.up('xl'));
  const {projectName} = useContext(Context)

  useEffect(
    () => {
      props.propRoleAndCountAddFunction(props.akey, role, memberCount);
    }, [memberCount, role]
  )

  useEffect(() => {
    console.log('!!!!!!!!!!! ', projectName);
  }, [])
  return (
    <div>
      {isLargeOrMore ?
        <>
          <div className="grid grid-rows-3 grid-cols-3 mt-2">
            <div className={""}>
              <IconButton color="primary" aria-label="롤 삭제"
                          onClick={(e) => {
                            props.propDeleteFunction(props.akey);
                          }}>
                <RemoveCircleOutlineIcon/>
              </IconButton>
              <TextField
                label="공고제목"
                size="small"
                sx={{width: '90%'}}
              ></TextField>
            </div>
            <div className={""}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
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
            <div className={"row-span-3"}>
              <NumberOfApplicants/>
            </div>
            <div className={""}>
              <TextField
                id="filled-number"
                label="투입인원"
                type="number"
                variant="standard"
                size="small"
                inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}
                value={memberCount}
                sx={{marginLeft: 5, width: '17%'}}
                onChange={(e) => {
                  const min = 0;
                  const max = 100;
                  const value = Math.max(min, Math.min(max, Number(e.target.value)));
                  setMemberCount(value);
                }}
              />
              <FormControl sx={{m: 1, width: '30%'}} size="small">
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
                </Select>
              </FormControl>
              {isVisibleRole &&
                <TextField sx={{paddingTop: 1, width: '40%'}} size='small'
                           label="직접입력"
                           value={role}
                           onChange={(e) => setRole(e.target.value)}></TextField>}
            </div>
            <div className={"row-span-2"}>
              <TextField size={"small"}
                         multiline
                         rows={4}
                         sx={{ml: "0px", width: '98%'}}
                         label="모집내용"/>
            </div>
            <div className={"pt-3"}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="투입 시작 일자"
                  value={startDate}
                  locale={ko}
                  inputFormat={"YYYY년 MM월 DD일"}
                  mask={"____년 __월 __일"}
                  onChange={(newValue) => setStartDate(newValue)}
                  renderInput={(params) => <TextField_DatePicker
                    size="small" sx={{
                    marginLeft: 5,
                    marginRight: 1,
                    width: '38%'
                  }} {...params} />}
                />
              </LocalizationProvider>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="투입 종료 일자"
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
                  renderInput={(params) => <TextField_DatePicker {...params}
                                                                 sx={{ml: 2}}
                                                                 size="small"
                                                                 sx={{width: '38%'}}
                                                                 error={endDate < startDate}/>}
                />
              </LocalizationProvider>
            </div>
          </div>
          <div className={"h-2"}></div>
        </>

        :

        <>
          <div className="grid grid-rows-6 grid-cols-12 gap-0.5 mt-8">
            <div className={"row-span-6 col-span-1 "}>
              <IconButton color="primary" aria-label="롤 삭제"
                          onClick={(e) => {
                            props.propDeleteFunction(props.akey);
                          }}>
                <RemoveCircleOutlineIcon/>
              </IconButton>
            </div>
            <div className={"col-span-5"}>
              <TextField
                label="공고제목"
                size="small"
                sx={{width: '100%'}}
              ></TextField>
            </div>
            <div className={"row-span-6 col-span-6 pl-5"}>
              <NumberOfApplicants/>
            </div>
            <div className={"row-span-1 col-span-5"}>
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
            <div lassName={isVisibleRole ? "row-span-1 col-span-1" : "row-span-1 col-span-2"}>
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
            <div className={isVisibleRole ? "row-span-1 col-span-2" : "row-span-1 col-span-4"}>
              <FormControl sx={{p: 1, width: '100%'}} size="small">
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
                </Select>
              </FormControl>
            </div>
              {isVisibleRole &&
                <div className={"row-span-1 col-span-2"}>
                  <TextField sx={{p: 1, width: '100%'}} size='small'
                             label="직접입력"
                             value={role}
                             onChange={(e) => setRole(e.target.value)}></TextField>
                </div>}
            <div className={"row-span-2 col-span-5"}>
              <TextField size={"small"}
                         multiline
                         rows={4}
                         sx={{ml: "0px", width: '100%'}}
                         label="모집내용"/>
            </div>
            <div className={"col-span-2"}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="투입 시작 일자"
                  value={startDate}
                  locale={ko}
                  inputFormat={"YYYY년 MM월 DD일"}
                  mask={"____년 __월 __일"}
                  onChange={(newValue) => setStartDate(newValue)}
                  renderInput={(params) => <TextField_DatePicker
                    size="small" sx={{
                    width: '100%', mt: 1
                  }} {...params} />}
                />
              </LocalizationProvider>
            </div>
            <div className={"col-span-2"}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="투입 종료 일자"
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
                  renderInput={(params) =>
                    <TextField_DatePicker {...params}
                                          size="small"
                                          sx={{width: '100%', mt: 1}}
                                          {...params}
                                          error={endDate < startDate}/>}
                />
              </LocalizationProvider>
            </div>
          </div>
          <div className={"h-2"}></div>
        </>}
    </div>

  );

}


export default JobOffer;
