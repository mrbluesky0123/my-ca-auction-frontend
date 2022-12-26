import React, {useContext, useEffect, useRef, useState} from "react";
import {Box, Button, Container, Divider, Grid, Stack, Typography} from "@mui/material";
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import StartIcon from '@mui/icons-material/Start';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ProjectDetailCrew from "./ProjectDetailCrew";
import {GlobalCommonContext} from "../../../common/GlobalContext";
import ComputerIcon from "@mui/icons-material/Computer";
import SettingsIcon from '@mui/icons-material/Settings';
import {useTheme} from "@mui/material/styles";

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
  const theme = useTheme();
  const projectInfoReference = useRef();
  const [projectInfoHeight, setProjectInfoHeight] = useState(0)
  const [wholeDivHeight, setWholeDivHeight] = useState(0)
  const {userId} = useContext(GlobalCommonContext);

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
          <Typography sx={{
            mb: data.projectLeader === userId ? 0 : 3
          }} variant={'h4'}>
            {data.projectTitle} ({selectedProjectId})
          </Typography>
        </Stack>
        {
          data.projectLeader === userId ?
            <Button
              variant="contained"
              sx={{
                paddingY: '0.2rem',
                paddingX: '1rem',
                fontSize: '1rem',
                fontWeight: 'bold',
                // border: `1px solid`,
                // width: '10rem',
                height: '2rem',
                justifyContent: "flex-start",
                mt: '0.5rem',
                mb: '0.7rem',
                boxShadow: 0,
                backgroundColor: theme.palette.primary[900],
                '&.MuiButton-root': {
                  '&:hover': {
                    boxShadow: 0
                  },
                }
              }}
              startIcon={<SettingsIcon className={'mr-[0.25rem]'}/>}>수정</Button> : null
        }
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
