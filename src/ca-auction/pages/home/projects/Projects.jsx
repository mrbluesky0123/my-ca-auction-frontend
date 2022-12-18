import * as React from 'react';
import {useEffect, useRef, useState} from 'react';
import Typography from '@mui/material/Typography';
import ProjectCard from "./ProjectCard";
import {Link} from 'react-scroll'
import {Box} from "@mui/material";
import ProjectDetail from "../projectdetail/ProjectDetail";
import {Route, Router, Routes, useNavigate} from "react-router-dom";
import HomeBody from "../HomeBody";
import ProjectCrew from "../../projectcrew/ProjectCrew";
import MyProject from "../../my-project";
import GanttChartExample from "../../GanttChartExample";


const Projects = ({projectId}) => {
  const navigate = useNavigate();
  const [selectedProjectID, setSelectedProjectID] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(null);
  const focusedProjectRef = useRef([]);
  const divRef = useRef();
  // const focusedProjectRef2 = useRef();

  const cardSelectHandler = (id) => {
    setCurrentIndex(id);
    if (selectedProjectID === id) {
      setSelectedProjectID(null);
      navigate(`/main/project/`);
    } else {
      setSelectedProjectID(id);
      navigate(`/main/project/${id}`);
    }
  }

  useEffect(() => {
    console.log("###11##", projectId)
    if (projectId !== null && projectId !== undefined) {
      console.log("###################", projectId)
      setCurrentIndex(parseInt(projectId));
      setSelectedProjectID(parseInt(projectId));
    }
  }, [])

  useEffect(() => {
    console.log("###22##", projectId)
    if (currentIndex !== null) {
      divRef.current.scroll({top: (currentIndex - 1) * 284})
    }
  }, [currentIndex])

  return (
    <div className={'h-screen m-[10px] overscroll-contain overflow-hidden'}>
      <div className={'overflow-hidden'}>
        <Typography sx={{
          fontWeight: 'bold',
          marginLeft: '10px',
          marginTop: '20px',
          marginBottom: '20px'
        }} variant='h4'>
          Projects
        </Typography>
      </div>
      <div className={'h-screen flex overflow-y-auto'}>
        <div ref={divRef} className={
          selectedProjectID === null ? 'flex flex-wrap content-start' : 'flex flex-wrap w-[390px] overflow-y-auto'
        }>
          {/*    <SimpleGrid spacing={5} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>*/}
          <Link to="/main/project/1">
            <div className={'h-[284px]'}>
              <ProjectCard
                isMyProject={false}
                isSelected={selectedProjectID === 1 ? true : false}
                id={1}
                title={"GAIA 고도화 프로젝트"}
                writer={"radi.yang"}
                status={"inProgress"}
                regDate={"2022/12/09"}
                content={"가이아 고도화를 위한 프로젝트입니다."}
                positionList={[{name: 'backend', vacancy: 4}, {
                  name: 'frontend',
                  vacancy: 2
                }, {name: 'PL', vacancy: 1}]}
                cardSelectHandler={() => cardSelectHandler(1)}
              />
            </div>
          </Link>
          {/*</SimpleGrid>*/}
          <div className={'h-[284px]'} >
            <ProjectCard
              isMyProject={true}
              isSelected={selectedProjectID === 2 ? true : false}
              id={2}
              title={"공공마이데이터 시스템 구축"}
              writer={"keedi.kim"}
              status={"complete"}
              regDate={"2022/12/10"}
              content={"공공마이데이터는 신용정보원을 호출하여 은행 업무에 쓰이는 여러 문서들을 발급받을 수 있도록 하는 시스템입니다."}
              positionList={[{name: 'backend', vacancy: 2}, {
                name: 'PL',
                vacancy: 1
              }]}
              cardSelectHandler={() => cardSelectHandler(2)}

            />
          </div>
          <div className={'h-[284px]'} >
            <ProjectCard
              isMyProject={false}
              isSelected={selectedProjectID === 3 ? true : false}
              id={3}
              title={"OSLO 2.0 프로젝트"}
              writer={"rami.c"}
              status={"inProgress"}
              regDate={"2022/12/10"}
              content={"홈화면 전계좌를 조회하는 오슬로의 차세대 프로젝트 멤버를 모십니다."}
              positionList={[{name: 'backend', vacancy: 3}, {
                name: 'PL',
                vacancy: 1
              }]}
              cardSelectHandler={() => cardSelectHandler(3)}
              ref={el => (focusedProjectRef.current[3] = el)}
            />
          </div>
          <div className={'h-[284px]'} >
            <ProjectCard
              isMyProject={false}
              isSelected={selectedProjectID === 4 ? true : false}
              id={4}
              title={"동의정보 migration 프로젝트"}
              writer={"randy.kang"}
              status={"inProgress"}
              regDate={"2022/12/10"}
              content={"계정계의 동의정보를 DIVA로 마이그레이션 하는 프로젝트입니다."}
              positionList={[{name: 'backend', vacancy: 4}, {
                name: '계정계',
                vacancy: 1
              }, {name: 'PL', vacancy: 1}]}
              cardSelectHandler={() => cardSelectHandler(4)}
              ref={el => (focusedProjectRef.current[4] = el)}
            />
          </div>
          <div className={'h-[284px]'} >
            <ProjectCard
              isMyProject={false}
              isSelected={selectedProjectID === 5 ? true : false}
              id={5}
              title={"Athena 인수인계"}
              writer={"rinto.ri"}
              status={"complete"}
              regDate={"2022/12/10"}
              content={"파기를 위한 시스템인 Athena의 새 주인을 찾습니다!"}
              positionList={[{name: 'backend', vacancy: 2}, {
                name: 'frontend',
                vacancy: 2
              }, {name: 'PL', vacancy: 1}]}
              cardSelectHandler={() => cardSelectHandler(5)}
              ref={el => (focusedProjectRef.current[5] = el)}
            />
          </div>
          <div className={'h-[284px]'} >
            <ProjectCard
              isMyProject={true}
              isSelected={selectedProjectID === 6 ? true : false}
              id={6}
              title={"고객인증캠프의 새로운 먹거리를 찾아서"}
              writer={"hanson.pl"}
              status={"inProgress"}
              regDate={"2022/12/10"}
              content={"고객인증캠프의 새로운 먹거리를 찾아서 기획해보실 분을 모집합니다."}
              positionList={[{name: '기획', vacancy: 2}, {
                name: 'PL',
                vacancy: 1
              }]}
              cardSelectHandler={() => cardSelectHandler(6)}
              ref={el => (focusedProjectRef.current[6] = el)}
            />
          </div>
          <div className={'h-[284px]'} >
            <ProjectCard
              isMyProject={false}
              isSelected={selectedProjectID === 7 ? true : false}
              id={7}
              title={"공공마이데이터 admin 화면 구축"}
              writer={"ray.nk"}
              status={"inProgress"}
              regDate={"2022/12/10"}
              content={"공공마이데이터의 admin 화면 구축을 위한 프로젝트입니다."}
              positionList={[{name: 'backend', vacancy: 2}, {
                name: 'frontend',
                vacancy: 1
              }]}
              cardSelectHandler={() => cardSelectHandler(7)}
              ref={el => (focusedProjectRef.current[7] = el)}
            />
          </div>
          <div className={'h-[284px]'} >
            <ProjectCard
              isMyProject={false}
              isSelected={selectedProjectID === 8 ? true : false}
              id={8}
              title={"공공마이데이터 admin 화면 구축"}
              writer={"ray.nk"}
              status={"inProgress"}
              regDate={"2022/12/10"}
              content={"공공마이데이터의 admin 화면 구축을 위한 프로젝트입니다."}
              positionList={[{name: 'backend', vacancy: 2}, {
                name: 'frontend',
                vacancy: 1
              }]}
              cardSelectHandler={() => cardSelectHandler(8)}
              ref={el => (focusedProjectRef.current[8] = el)}
            />
          </div>
          <div className={'h-[284px]'} >
            <ProjectCard
              isMyProject={false}
              isSelected={selectedProjectID === 9 ? true : false}
              id={9}
              title={"공공마이데이터 admin 화면 구축"}
              writer={"ray.nk"}
              status={"inProgress"}
              regDate={"2022/12/10"}
              content={"공공마이데이터의 admin 화면 구축을 위한 프로젝트입니다."}
              positionList={[{name: 'backend', vacancy: 2}, {
                name: 'frontend',
                vacancy: 1
              }]}
              cardSelectHandler={() => cardSelectHandler(9)}
              ref={el => (focusedProjectRef.current[9] = el)}
            />
          </div>
          <div className={'h-[284px]'} >
            <ProjectCard
              isMyProject={false}
              isSelected={selectedProjectID === 10 ? true : false}
              id={10}
              title={"공공마이데이터 admin 화면 구축"}
              writer={"ray.nk"}
              status={"inProgress"}
              regDate={"2022/12/10"}
              content={"공공마이데이터의 admin 화면 구축을 위한 프로젝트입니다."}
              positionList={[{name: 'backend', vacancy: 2}, {
                name: 'frontend',
                vacancy: 1
              }]}
              cardSelectHandler={() => cardSelectHandler(10)}
              ref={el => (focusedProjectRef.current[10] = el)}
            />
          </div>
          <div className={'h-[284px]'} >
            <ProjectCard
              isMyProject={false}
              isSelected={selectedProjectID === 11 ? true : false}
              id={11}
              title={"공공마이데이터 admin 화면 구축"}
              writer={"ray.nk"}
              status={"inProgress"}
              regDate={"2022/12/10"}
              content={"공공마이데이터의 admin 화면 구축을 위한 프로젝트입니다."}
              positionList={[{name: 'backend', vacancy: 2}, {
                name: 'frontend',
                vacancy: 1
              }]}
              cardSelectHandler={() => cardSelectHandler(11)}
              ref={el => (focusedProjectRef.current[11] = el)}
            />
          </div>
          <div className={'h-[284px]'} >
            <ProjectCard
              isMyProject={false}
              isSelected={selectedProjectID === 12 ? true : false}
              id={12}
              title={"공공마이데이터 admin 화면 구축"}
              writer={"ray.nk"}
              status={"inProgress"}
              regDate={"2022/12/10"}
              content={"공공마이데이터의 admin 화면 구축을 위한 프로젝트입니다."}
              positionList={[{name: 'backend', vacancy: 2}, {
                name: 'frontend',
                vacancy: 1
              }]}
              cardSelectHandler={() => cardSelectHandler(12)}
              ref={el => (focusedProjectRef.current[13] = el)}
            />
          </div>
          <div className={'h-[284px]'} >
            <ProjectCard
              isMyProject={false}
              isSelected={selectedProjectID === 13 ? true : false}
              id={13}
              title={"공공마이데이터 admin 화면 구축"}
              writer={"ray.nk"}
              status={"inProgress"}
              regDate={"2022/12/10"}
              content={"공공마이데이터의 admin 화면 구축11을 위한 프로젝트입니다."}
              positionList={[{name: 'backend', vacancy: 2}, {
                name: 'frontend',
                vacancy: 1
              }]}
              cardSelectHandler={() => cardSelectHandler(13)}
              ref={el => (focusedProjectRef.current[14] = el)}
            />
          </div>

          <Box sx={{height: '500px'}}></Box>
          {/*</SimpleGrid>*/}
        </div>
        <div>
        {
          selectedProjectID !== null && selectedProjectID !== undefined ?
            <ProjectDetail selectedProjectId={selectedProjectID}/>
            : null
        }
        </div>

      </div>
    </div>
  )
}

export default Projects;
