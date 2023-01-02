import React, {useContext, useEffect, useState} from "react";
import IconButton from '@mui/material/IconButton';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';


import {FormControl, InputLabel, MenuItem, Select, TextField, useMediaQuery} from "@mui/material";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {ko} from "date-fns/esm/locale";
import TextField_DatePicker from "@mui/material/TextField";
import NumberOfApplicants from "./NumberOfApplicants";
import {useTheme} from "@mui/material/styles";
import {Context} from './ProjectCrew';
import {datePickerToDateString} from "../../composable/date-util";


const JobOffer = (props) => {
  const theme = useTheme();
  const [memberCount, setMemberCount] = useState(props.memberCount); //투입인원 수

  const [announcementSubject, setAnnouncementSubject] = useState(props.announcementSubject); //모집공고제목
  const [announcementContent, setAnnouncementContent] = useState(props.announcementContent); //모집내용
  const [announcementCloseDate, setAnnouncementCloseDate] = useState(datePickerToDateString(props.endDate)); //공고마감일자
  const [role, setRole] = useState("PL");  //투입인원 롤
  const [startDate, setStartDate] = useState(datePickerToDateString(props.startDate)); //투입시작일자
  const [endDate, setEndDate] = useState(datePickerToDateString(props.endDate)); //투입종료일자
  const [isValidationDate, setIsValidationDate] = useState(false); //투입시작일자 종료일자 값 검증
  const [isValidationDateErrorMessage, setIsValidationDateMessage] = useState(""); //투입시작일자 종료일자 검증 결과
  const [isValidationAnnouncementCloseDate, setIsValidationAnnouncementCloseDate] = useState(false); //공고마감일자 값 검증


  const [isVisibleRole, setIsVisibleRole] = useState(false); //추가입력 역할 TextField
  const isLargeOrMore = useMediaQuery(theme.breakpoints.up('xl'));
  const {projectStartDate, projectEndDate} = useContext(Context);
  const {setJobOfferinfo} = useContext(Context);
  const {isValidation, setisValidation} = useContext(Context);
  const {setIsValidationJobOffer, setIsValidationJobOfferMessage} = useContext(Context);


  useEffect(
    () => {
      props.propRoleAndCountAddFunction(props.akey, role, memberCount);
    }, [memberCount, role]
  )

  useEffect(() => {
    let jobOfferInfo = {
      id: props.akey,
      title: announcementSubject,
      content: announcementContent,
      crew_cnt: memberCount,
      crew_id: "props.akey.toString()",
      role_name: role,
      start_at: datePickerToDateString(startDate),
      end_at: datePickerToDateString(endDate),
      finished_at: datePickerToDateString(announcementCloseDate)
    }

    setJobOfferinfo(jobOfferInfo);
    dateValidation();


  }, [announcementSubject, announcementContent, memberCount, role, startDate, endDate, announcementCloseDate])

  useEffect(() => {
    console.log(isValidationDate);
    console.log(isValidationAnnouncementCloseDate);
    console.log(isValidationDate || isValidationAnnouncementCloseDate);

    setIsValidationJobOffer(isValidationDate || isValidationAnnouncementCloseDate);

  }, [isValidationDate, isValidationAnnouncementCloseDate])

  const dateValidation = () => {

    console.log('projectStartDate1 ', datePickerToDateString(projectStartDate));
    console.log('projectEndDate1 ', datePickerToDateString(projectEndDate));
    console.log('startDate1 ', datePickerToDateString(startDate));
    console.log('endDate1 ', datePickerToDateString(endDate));

    if (datePickerToDateString(startDate) > datePickerToDateString(endDate)) {
      setIsValidationDate(true);
      setIsValidationDateMessage("투입시작일자가 투입종료일자 이후 일 수 없습니다.");
    } else if (datePickerToDateString(projectStartDate) > datePickerToDateString(startDate)) {
      setIsValidationDate(true);
      setIsValidationDateMessage("투입시작일자가 프로젝트시작일자 이전 일 수 없습니다.");
    } else if (datePickerToDateString(endDate) < datePickerToDateString(startDate)) {
      setIsValidationDate(true);
      setIsValidationDateMessage("투입시작일자가 프로젝트시작일자 이전 일 수 없습니다.1");
    } else if (datePickerToDateString(endDate) > datePickerToDateString(projectEndDate)) {
      setIsValidationDate(true);
      setIsValidationDateMessage("투입종료일자가 프로젝트종료일자 이후 일 수 없습니다.");
    } else {
      setIsValidationDate(false);
      setIsValidationDateMessage("");
    }

    if (datePickerToDateString(endDate) < datePickerToDateString(announcementCloseDate)) {
      setIsValidationAnnouncementCloseDate(true);
      setIsValidationJobOfferMessage("공공 마감일자가 투입종료일자 이전이어야 합니다.");
    } else if (datePickerToDateString(startDate) > datePickerToDateString(announcementCloseDate)) {
      setIsValidationAnnouncementCloseDate(true);
      setIsValidationJobOfferMessage("공공 마감일자가 투입시작일자 이후이어야 합니다.");
    } else {
      setIsValidationAnnouncementCloseDate(false);
      setIsValidationJobOfferMessage("");
    }
  }

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
        <div className={"col-span-4"}>
          <TextField
            label="공고제목"
            required
            size="small"
            value={announcementSubject}
            sx={{width: '100%'}}
            onChange={(e) => setAnnouncementSubject(e.target.value)}
          ></TextField>
        </div>
        <div className={"col-span-2"}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              className={"w-full"}
              label="공고 마감 일자"
              value={announcementCloseDate}
              locale={ko}
              inputFormat={"YYYY년 MM월 DD일"}
              mask={"____년 __월 __일"}
              onChange={(newValue) => setAnnouncementCloseDate(datePickerToDateString(newValue))}
              renderInput={(params) => <TextField_DatePicker
                size="small" {...params}
                error={isValidationAnnouncementCloseDate}/>}
            />
          </LocalizationProvider>
        </div>
        <div className={"row-span-6 col-span-5 pl-5"}>
          <NumberOfApplicants/>
        </div>
        {/*<div className={isVisibleRole ? "row-span-1 col-span-1" : "row-span-1 col-span-2"}>*/}
        <div className={"row-span-1 col-span-1"}>
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
                // console.log("Select ", e.target.value);
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
                     required
                     rows={4}
                     sx={{ml: "0px", width: '100%'}}
                     label="모집내용"
                     value={announcementContent}
                     onChange={(e) => setAnnouncementContent(e.target.value)}/>
        </div>
        <div className={"col-span-3 row-span-2"}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="투입 시작 일자"
              value={startDate}
              locale={ko}
              inputFormat={"YYYY년 MM월 DD일"}
              mask={"____년 __월 __일"}
              onChange={(newValue) => {
                setStartDate(datePickerToDateString(newValue));

              }}
              renderInput={(params) => <TextField_DatePicker
                size="small" sx={{
                width: '100%', mt: 2
              }}{...params}
                error={isValidationDate}
                helperText={isValidationDateErrorMessage}
              />}
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
                setEndDate(datePickerToDateString(newValue));
                dateValidation();
              }}
              renderInput={(params) =>
                <TextField_DatePicker {...params}
                                      size="small"
                                      sx={{width: '100%', mt: 2}}
                                      {...params}
                                      error={isValidationDate}
                />}
            />
          </LocalizationProvider>
        </div>
      </div>
      <div className={"h-2"}></div>

    </div>

  );

}


export default JobOffer;
