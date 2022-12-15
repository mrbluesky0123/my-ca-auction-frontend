import React, {useState} from "react";
import {Typography} from "@mui/material";
import {useParams} from "react-router-dom";
const ProjectDetail = ({selectedProjectId}) => {

  return (
    <div className={'p-[30px]'}>
      <div>
        <Typography variant={'h4'}>
          공공마이데이터 시스템 구축 ({selectedProjectId})
        </Typography>
      </div>
    </div>
  )

}

export default ProjectDetail;
