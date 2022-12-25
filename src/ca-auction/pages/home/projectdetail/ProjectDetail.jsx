import React, {useEffect, useRef, useState} from "react";
import {
  Box,
  Divider,
  Grid,
  Stack,
  TextField,
  ToggleButton,
  Typography,
  Container
} from "@mui/material";
import {styled} from "@mui/material/styles";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {ko} from "date-fns/esm/locale";
import TextField_DatePicker from "@mui/material/TextField";
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import StartIcon from '@mui/icons-material/Start';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ProjectDetailCrew from "./ProjectDetailCrew";
import Card from "@mui/material/Card";

const data = {
  projectId: 2361,
  projectTitle: '공공마이데이터 시스템 구축',
  projectLeader: 'keedi.kim',
  projectStartDate: '2022-12-01',
  projectEndDate: '2022-12-31',
  projectCrewStatus: '모집 중',
  projectDescription: '공공마이데이터를 사용하면 신용정보원을 호출하여 은행업무에 쓰이는 여러 문서들을문서들을문서들을문서들을문서들을 발급받을 수 있습니다.\n' +
    '공공마이데이터는 대출 신청 시 서류 발급, 본인 확인 용 서류 발급 등의 여러 분야에서 사용될 수 있습니다.\n' +
    '<기술 스택>\n' +
    'Kotlin, Springboot, JPA, PostgresSql \n',
  projectRecruit: [
    {
      recruitTitle: null,
      crewCount: 2,
      crewRoleName: 'Backend',
      startDate: '2022-12-01',
      endDate: '2022-12-10',
      recruitEndDate: '2022-12-31',
      recruitDescription: '백엔드 구합니다~'
    },
    {
      recruitTitle: null,
      crewCount: 1,
      crewRoleName: 'Frontend',
      startDate: '2022-12-01',
      endDate: '2022-12-10',
      recruitEndDate: '2022-12-31',
      recruitDescription: '프론트엔드 구함~~'
    },
    {
      recruitTitle: null,
      crewCount: 1,
      crewRoleName: '기획',
      startDate: '2022-12-01',
      endDate: '2022-12-10',
      recruitEndDate: '2022-12-31',
      recruitDescription: '기획자 어디 없나~'
    },
  ]
}

const ProjectDetail = ({selectedProjectId}) => {
  const projectInfoReference = useRef();
  const [projectInfoHeight, setProjectInfoHeight] = useState(0)
  const [wholeDivHeight, setWholeDivHeight] = useState(0)
  let recruitIndex = 0;

  useEffect(() => {
    setWholeDivHeight(projectInfoReference.current.parentElement.clientHeight)
    setProjectInfoHeight(projectInfoReference.current.clientHeight)
  }, [])

  return (
    <div className={'h-[calc(100vh-50px)]'}>
      <Box ref={projectInfoReference}>
        <Typography sx={{fontSize: '18px', color: 'text.secondary'}} mb={1}>
          프로젝트# {selectedProjectId}
        </Typography>
        <Stack direction={"row"}>
          <Typography variant={'h4'} mb={3}>
            {data.projectTitle} ({selectedProjectId})
          </Typography>
        </Stack>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Typography
              sx={{
                fontSize: '18px'
              }}>
              <SupervisorAccountIcon sx={{marginRight: 1}}/> 프로젝트 리더
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <Typography
              sx={{
                fontSize: '18px'
              }}>
              {data.projectLeader}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography
              sx={{
                fontSize: '18px'
              }}>
              <StartIcon sx={{marginRight: 1}}/> 프로젝트 시작일자
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <Typography
              sx={{
                fontSize: '18px'
              }}>
              {data.projectStartDate}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography
              sx={{
                fontSize: '18px'
              }}>
              <EventAvailableIcon sx={{marginRight: 1}}/> 프로젝트 종료일자
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <Typography
              sx={{
                fontSize: '18px'
              }}>
              {data.projectEndDate}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography
              sx={{
                fontSize: '18px'
              }}>
              <DescriptionOutlinedIcon sx={{marginRight: 1}}/> 프로젝트 설명
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <Box fixed
                       sx={{
                         // maxHeight: (wholeDivHeight - projectInfoHeight > 300 ? wholeDivHeight - projectInfoHeight : 600),
                         paddingX: 0,
                         overflowY: "scroll",
                         "&.MuiContainer-root": {
                           paddingLeft: 0,
                           paddingRight: 20
                         }
                       }}>
              <Typography>
                    <pre className={'whitespace-pre-line'}
                         style={{fontFamily: 'inherit', fontSize: '18px'}}>
                      {data.projectDescription}
                    </pre>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Divider sx={{marginY: 3}}/>
      <Container fixed
        sx={{
          maxHeight: (wholeDivHeight - projectInfoHeight > 300 ? wholeDivHeight - projectInfoHeight - 48 : 600),
          overflowY: "scroll",
          "&.MuiContainer-root": {
            paddingLeft: 0,
            paddingRight: 20,
            marginX: 0
          }
        }}>
        {
          <>
          {data.projectRecruit.map((eachItem) =>
            (
              <div>
                <Typography
                  variant={'h6'}
                  sx={{marginBottom: 1, fontWeight: 'bold'}}
                >
                  모집 #{++recruitIndex} {
                  eachItem.recruitTitle === null ?
                    (`[${data.projectTitle}] - ${eachItem.crewRoleName} 모집`)
                    :
                    eachItem.recruitTitle
                }
                </Typography>
                <ProjectDetailCrew
                  crewCount={eachItem.crewCount}
                  crewRoleName={eachItem.crewRoleName}
                  startDate={eachItem.startDate}
                  endDate={eachItem.endDate}
                  recruitEndDate={eachItem.recruitEndDate}
                  recruitDescription={eachItem.recruitDescription}
                />
              </div>
            ))}
          </>
        }
        <Box sx={{height: '100px'}}/>
      </Container>
    </div>
  )

}

export default ProjectDetail;
