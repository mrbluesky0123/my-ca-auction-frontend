import * as React from 'react';
import {useEffect, useRef, useState} from 'react';
import Typography from '@mui/material/Typography';
import ProjectCard from "./ProjectCard";
import {Link} from 'react-scroll'
import {Box} from "@mui/material";


const Projects = () => {
  const [selectedProjectID, setSelectedProjectID] = useState(null)
  const [index, setIndex] = useState(null);
  const focusedProjectRef = useRef([]);
  const divRef = useRef();
  // const focusedProjectRef2 = useRef();

  const cardSelectHandler = (projectId) => {
    setIndex(projectId);
    if (selectedProjectID === projectId) {
      setSelectedProjectID(null)
    } else {
      setSelectedProjectID(projectId)
    }
  }

  useEffect(() => {
    if(index !== null) {
      console.log("########", focusedProjectRef.current);
      // focusedProjectRef.current[index].scrollIntoView({ behavior: 'smooth'});
      divRef.current.scroll({top: (index-1) * 260, behavior: 'smooth'})
    }
  }, [index])

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
          selectedProjectID === null ? 'flex flex-wrap' : 'flex flex-wrap w-[390px] overflow-y-auto'
        }>
          {/*    <SimpleGrid spacing={5} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>*/}
          <div id={'1'} ref={(el) => (focusedProjectRef.current[1] = el)}>
            <ProjectCard
              isMyProject={false}
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
          {/*</SimpleGrid>*/}
          <Link to={'4'} spy={true} smooth={true}>
            <div id={'2'} ref={(el) => (focusedProjectRef.current[2] = el)}>
                <ProjectCard
                  isMyProject={true}
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
          </Link>
          <div id={'3'} ref={(el) => (focusedProjectRef.current[3] = el)}>
            <ProjectCard
              isMyProject={false}
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
          <div id='4' ref={(el) => (focusedProjectRef.current[4] = el)}>
            <ProjectCard
              isMyProject={false}
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
          <div id={'5'} ref={(el) => (focusedProjectRef.current[5] = el)}>
            <ProjectCard
              isMyProject={false}
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
          <div id={'6'} ref={(el) => (focusedProjectRef.current[6] = el)}>
            <ProjectCard
              isMyProject={true}
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
          <div id={'7'} ref={(el) => (focusedProjectRef.current[7] = el)}>
            <ProjectCard
              isMyProject={false}
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
          <div id={'8'} ref={(el) => (focusedProjectRef.current[8] = el)}>
            <ProjectCard
              isMyProject={false}
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
          <div id={'9'} ref={(el) => (focusedProjectRef.current[9] = el)}>
            <ProjectCard
              isMyProject={false}
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
          <div id={'10'} ref={(el) => (focusedProjectRef.current[10] = el)}>
            <ProjectCard
              isMyProject={false}
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
          <div id={'11'} ref={(el) => (focusedProjectRef.current[11] = el)}>
            <ProjectCard
              isMyProject={false}
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
          <div id={'12'} ref={(el) => (focusedProjectRef.current[12] = el)}>
            <ProjectCard
              isMyProject={false}
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
          <div id={'13'} ref={(el) => (focusedProjectRef.current[13] = el)}>
            <ProjectCard
              isMyProject={false}
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
              cardSelectHandler={() => cardSelectHandler(13)}
              ref={el => (focusedProjectRef.current[14] = el)}
            />
          </div>
          <Box sx={{height: '500px'}}></Box>
          {/*</SimpleGrid>*/}
        </div>
        {
          selectedProjectID === null ? null :
            <div className={'flex flex-col flex-grow  h-screen overflow-y-auto'}>
              <Typography variant={'h1'}>Hello, {index} world!</Typography>
              <Typography variant={'h1'}>Hello, {index} world!</Typography>
              <Typography variant={'h1'}>Hello, {index} world!</Typography>
              <Typography variant={'h1'}>Hello, {index} world!</Typography>
              <Typography variant={'h1'}>Hello, {index} world!</Typography>
              <Typography variant={'h1'}>Hello, {index} world!</Typography>
              <Typography variant={'h1'}>Hello, {index} world!</Typography>
              <Typography variant={'h1'}>Hello, {index} world!</Typography>
              <Typography variant={'h1'}>Hello, {index} world!</Typography>
              <Typography variant={'h1'}>Hello, {index} world!</Typography>
            </div>
        }

      </div>
    </div>
  )
}

export default Projects;
