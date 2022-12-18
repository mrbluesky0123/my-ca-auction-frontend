import React, {useEffect, useState} from "react";
import {Typography} from "@mui/material";
import {useParams} from "react-router-dom";
const ProjectDetail = ({selectedProjectId}) => {
  useEffect(() => {
    console.log("###111111##", selectedProjectId)
  }, [])
  return (
    <div className={'p-[30px]'}>
      <div>
        <Typography variant={'h4'} mb={1}>
          공공마이데이터 시스템 구축 ({selectedProjectId})
        </Typography>
        <Typography
          sx={{
            fontSize: '20px'
          }}>
          공공마이데이터 시스템 구축 ({selectedProjectId})
        </Typography>
      </div>
    </div>
  )

}

export default ProjectDetail;
