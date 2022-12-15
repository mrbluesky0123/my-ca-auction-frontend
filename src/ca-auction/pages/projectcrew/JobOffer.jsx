import React, {useState} from "react";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';


import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';


import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from "@mui/material";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {ko} from "date-fns/esm/locale";
import TextField_DatePicker from "@mui/material/TextField";


const JobOffer = (props) => {
  const [memberCount, setMemberCount] = useState("1"); //투입인원 수
  const [role, setRole] = useState("PL");  //투입인원 롤
  const [startDate, setStartDate] = useState(new Date()); //시작일자
  const [endDate, setEndDate] = useState(new Date()); //종료일자
  const [isVisibleRole, setIsVisibleRole] = useState(false); //추가입력 역할 TextField


  return (
    <div>
      <div>
        <Stack direction="row" spacing={1}>
          <IconButton color="primary" aria-label="롤 삭제"
                      onClick={(e) => {
                        props.propDeleteFunction(props.akey);
                      }}>
            <RemoveCircleOutlineIcon/>
          </IconButton>
          <TextField
            id="filled-number"
            label="투입인원"
            type="number"
            variant="standard"
            size="small"
            inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}
            value={memberCount}
            onChange={(e) => {
              const min = 0;
              const max = 100;
              const value = Math.max(min, Math.min(max, Number(e.target.value)));
              setMemberCount(value);
            }}

          />
          <FormControl sx={{m: 1, minWidth: 150}} size="small">
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
          {isVisibleRole && <TextField size='small' value={role}
                                       onChange={(e) => setRole(e.target.value)}></TextField>}

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
                  alert("123");
                } else {
                  setEndDate(newValue);
                }
              }}
              renderInput={(params) => <TextField_DatePicker {...params}
                                                             sx={{ml: 2}}
                                                             size="small"
                                                             error={endDate < startDate}/>}
            />
          </LocalizationProvider>
        </Stack>
      </div>
      <div className="h-2"></div>
      <div>
        <TextField size={"small"}
                   multiline
                   rows={3}
                   sx={{ml: "45px", width: '90%'}}
                   label="모집내용"/>
      </div>
      <div className="h-2"></div>


    </div>

  );

}


export default JobOffer;
