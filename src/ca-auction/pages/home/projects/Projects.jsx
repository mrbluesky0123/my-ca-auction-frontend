import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ProjectCard from "./ProjectCard";


const Projects = () => {

  return (
    <div>
      <Typography className='text-2xl font-bold' pb={5}>Recent Projects</Typography>
      <div className='flex flex-wrap'>
        {/*    <SimpleGrid spacing={5} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>*/}
        <ProjectCard
          isMyProject={false}
          id={1}
          title={"GAIA 고도화 프로젝트"}
          writer={"radi.yang"}
          status={"inProgress"}
          regDate={"2022/12/09"}
          content={"가이아 고도화를 위한 프로젝트입니다."}
          positionList={[{name: 'backend', vacancy: 4}, {name: 'frontend', vacancy: 2}, {name: 'PL', vacancy: 1}]}
        />
        {/*</SimpleGrid>*/}
        <ProjectCard
          isMyProject={true}
          id={2}
          title={"공공마이데이터 시스템 구축"}
          writer={"keedi.kim"}
          status={"complete"}
          regDate={"2022/12/10"}
          content={"공공마이데이터는 신용정보원을 호출하여 은행 업무에 쓰이는 여러 문서들을 발급받을 수 있도록 하는 시스템입니다."}
          positionList={[{name: 'backend', vacancy: 2}, {name: 'PL', vacancy: 1}]}
        />
        <ProjectCard
          isMyProject={false}
          id={3}
          title={"OSLO 2.0 프로젝트"}
          writer={"rami.c"}
          status={"inProgress"}
          regDate={"2022/12/10"}
          content={"홈화면 전계좌를 조회하는 오슬로의 차세대 프로젝트 멤버를 모십니다."}
          positionList={[{name: 'backend', vacancy: 3}, {name: 'PL', vacancy: 1}]}
        />
        <ProjectCard
          isMyProject={false}
          id={4}
          title={"동의정보 migration 프로젝트"}
          writer={"randy.kang"}
          status={"inProgress"}
          regDate={"2022/12/10"}
          content={"계정계의 동의정보를 DIVA로 마이그레이션 하는 프로젝트입니다."}
          positionList={[{name: 'backend', vacancy: 4}, {name: '계정계', vacancy: 1}, {name: 'PL', vacancy: 1}]}
        />
        <ProjectCard
          isMyProject={false}
          id={5}
          title={"Athena 인수인계"}
          writer={"rinto.ri"}
          status={"complete"}
          regDate={"2022/12/10"}
          content={"파기를 위한 시스템인 Athena의 새 주인을 찾습니다!"}
          positionList={[{name: 'backend', vacancy: 2}, {name: 'frontend', vacancy: 2}, {name: 'PL', vacancy: 1}]}
        />
        <ProjectCard
          isMyProject={true}
          id={6}
          title={"고객인증캠프의 새로운 먹거리를 찾아서"}
          writer={"hanson.pl"}
          status={"inProgress"}
          regDate={"2022/12/10"}
          content={"고객인증캠프의 새로운 먹거리를 찾아서 기획해보실 분을 모집합니다."}
          positionList={[{name: '기획', vacancy: 2}, {name: 'PL', vacancy: 1}]}
        />
        <ProjectCard
          isMyProject={false}
          id={7}
          title={"공공마이데이터 admin 화면 구축"}
          writer={"ray.nk"}
          status={"inProgress"}
          regDate={"2022/12/10"}
          content={"공공마이데이터의 admin 화면 구축을 위한 프로젝트입니다."}
          positionList={[{name: 'backend', vacancy: 2}, {name: 'frontend', vacancy: 1}]}
        />
        {/*</SimpleGrid>*/}
      </div>
    </div>
  )
}

export default Projects;
