import React, {useEffect, useRef, useState} from "react";
import {
  Grid, TextField, Typography,
} from "@mui/material";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import CategoryIcon from '@mui/icons-material/Category';
import StartIcon from '@mui/icons-material/Start';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import BlindsClosedIcon from '@mui/icons-material/BlindsClosed';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {styled} from "@mui/material/styles";
const ProjectDetailCrew = ({crewCount, crewRoleName, startDate, endDate, recruitEndDate, recruitDescription, isEditMode}) => {

  const eachSubject = (child) => {
    return (<div className={'flex'}>
      <ArrowRightIcon sx={{marginRight: '1px'}}/>
      <Typography>
        {child}
      </Typography>
    </div>)
  };

  return (
    <div className={'flex'}>
      <div className={'w-1/3'}>
        <Grid container spacing={1} sx={{marginBottom: 4}}>
          <Grid item xs={4}>
            {eachSubject('투입인원')}
          </Grid>
          <Grid item xs={8} >
            {crewCount}
          </Grid>
          <Grid item xs={4}>
            {eachSubject('투입역할')}
          </Grid>
          <Grid item xs={8}>
            {crewRoleName}
          </Grid>
          <Grid item xs={4}>
            {eachSubject('투입시작일자')}
          </Grid>
          <Grid item xs={8}>
            {startDate}
          </Grid>
          <Grid item xs={4}>
            {eachSubject('투입종료일자')}
          </Grid>
          <Grid item xs={8}>
            {endDate}
          </Grid>
          <Grid item xs={4}>
            {eachSubject('모집마감일자')}
          </Grid>
          <Grid item xs={8}>
            {recruitEndDate}
          </Grid>
        </Grid>
      </div>
      <div className={'w-2/3'}>
        <Typography
          sx={{
            fontSize: '16px'
          }}>
          {eachSubject('모집내용')}
        </Typography>
        <Typography>
          <pre className={'whitespace-pre-line'}
               style={{fontFamily: 'inherit', fontSize: '18px'}}>
            {recruitDescription}
          </pre>
        </Typography>
      </div>
    </div>
  )
}

export default ProjectDetailCrew;
