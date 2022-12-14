import * as React from 'react';
import {useContext, useEffect, useRef, useState} from 'react';
import ProjectCard from "./ProjectCard";
import {Box} from "@mui/material";
import ProjectDetail from "../projectdetail/ProjectDetail";
import {useNavigate} from "react-router-dom";
import callApi from "../../../common/callApi";
import {GlobalCommonContext} from "../../../common/GlobalContext";


const Projects = ({projectId}) => {
  const navigate = useNavigate();
  const [selectedProjectID, setSelectedProjectID] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(null);
  const [projects, setProjects] = useState([]);
  const focusedProjectRef = useRef([]);
  const divRef = useRef();
  const [userId, setUserId] = useState(null);


  useEffect(() => {
    if (projectId !== null && projectId !== undefined) {
      setCurrentIndex(parseInt(projectId));
      setSelectedProjectID(parseInt(projectId));
    }
    let data = callApi({
      url: '/v1/projects',
      method: "get",
    })
    setUserId(localStorage.getItem("userId"));
  }, [])

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

  const getProjectBriefInfo = async () => {
    let response = await callApi({
      url: '/v1/projects',
      method: 'get',
    })
    if(response.success) {
      console.log("###### ", response);
      setProjects([...projects, response.data.result])
    }
  }

  useEffect(() => {
    console.log("###22##", projectId)
    if (currentIndex !== null) {
      divRef.current.scroll({top: (currentIndex - 1) * 284,
        behavior: 'smooth'
      }
      )
    }
  }, [currentIndex])

  return (
    // <div className={'h-full m-[10px] overscroll-contain overflow-hidden'}>
    <Box sx={{marginTop: '10px'}} component="main">
      <div className={'h-full flex overflow-y-auto'}>
        <div ref={divRef} className={
          selectedProjectID === null ? 'flex flex-wrap content-start' : 'flex flex-wrap w-[390px] h-[calc(100vh-50px)] overflow-y-auto'
        }>
          {
            projects.map( (eachProject) => {
                return (
                  <div className={'h-[284px] '}>
                    <ProjectCard
                      isMyProject={false}
                      isSelected={selectedProjectID === eachProject.id ? true : false}
                      id={1}
                      title={eachProject.title}
                      writer={eachProject.crew_id}
                      status={"inProgress"}
                      regDate={"2022/12/09"}
                      content={"????????? ???????????? ?????? ?????????????????????."}
                      positionList={[{name: 'backend', vacancy: 4}, {
                        name: 'frontend',
                        vacancy: 2
                      }, {name: 'PL', vacancy: 1}]}
                      cardSelectHandler={() => cardSelectHandler(1)}
                    />
                  </div>
                )
              }
            )
          }


          <div className={'h-[284px] '}>
            <ProjectCard
              isMyProject={userId === "radi.yang"}
              isSelected={selectedProjectID === 1 ? true : false}
              id={1}
              title={"GAIA ????????? ????????????"}
              writer={"radi.yang"}
              status={"inProgress"}
              regDate={"2022/12/09"}
              content={"????????? ???????????? ?????? ?????????????????????."}
              positionList={[{name: 'backend', vacancy: 4}, {
                name: 'frontend',
                vacancy: 2
              }, {name: 'PL', vacancy: 1}]}
              cardSelectHandler={() => cardSelectHandler(1)}
            />
          </div>
          <div className={'h-[284px]'}>
            <ProjectCard
              isMyProject={userId === "keedi.kim"}
              isSelected={selectedProjectID === 2 ? true : false}
              id={2}
              title={"????????????????????? ????????? ??????"}
              writer={"keedi.kim"}
              status={"complete"}
              regDate={"2022/12/10"}
              content={"???????????????????????? ?????????????????? ???????????? ?????? ????????? ????????? ?????? ???????????? ???????????? ??? ????????? ?????? ??????????????????."}
              positionList={[{name: 'backend', vacancy: 2}, {
                name: 'PL',
                vacancy: 1
              }]}
              cardSelectHandler={() => cardSelectHandler(2)}

            />
          </div>
          <div className={'h-[284px]'}>
            <ProjectCard
              isMyProject={userId === "randy.kang"}
              isSelected={selectedProjectID === 3 ? true : false}
              id={3}
              title={"OSLO 2.0 ????????????"}
              writer={"randy.kang"}
              status={"inProgress"}
              regDate={"2022/12/10"}
              content={"????????? ???????????? ???????????? ???????????? ????????? ???????????? ????????? ????????????."}
              positionList={[{name: 'backend', vacancy: 3}, {
                name: 'PL',
                vacancy: 1
              }]}
              cardSelectHandler={() => cardSelectHandler(3)}
              ref={el => (focusedProjectRef.current[3] = el)}
            />
          </div>
          <div className={'h-[284px]'}>
            <ProjectCard
              isMyProject={userId === "randy.kang"}
              isSelected={selectedProjectID === 4 ? true : false}
              id={4}
              title={"???????????? migration ????????????"}
              writer={"randy.kang"}
              status={"inProgress"}
              regDate={"2022/12/10"}
              content={"???????????? ??????????????? DIVA??? ?????????????????? ?????? ?????????????????????."}
              positionList={[{name: 'backend', vacancy: 4}, {
                name: '?????????',
                vacancy: 1
              }, {name: 'PL', vacancy: 1}]}
              cardSelectHandler={() => cardSelectHandler(4)}
              ref={el => (focusedProjectRef.current[4] = el)}
            />
          </div>
          <div className={'h-[284px]'}>
            <ProjectCard
              isMyProject={userId === "rinto.ri"}
              isSelected={selectedProjectID === 5 ? true : false}
              id={5}
              title={"Athena ????????????"}
              writer={"rinto.ri"}
              status={"complete"}
              regDate={"2022/12/10"}
              content={"????????? ?????? ???????????? Athena??? ??? ????????? ????????????!"}
              positionList={[{name: 'backend', vacancy: 2}, {
                name: 'frontend',
                vacancy: 2
              }, {name: 'PL', vacancy: 1}]}
              cardSelectHandler={() => cardSelectHandler(5)}
              ref={el => (focusedProjectRef.current[5] = el)}
            />
          </div>
          <div className={'h-[284px]'}>
            <ProjectCard
              isMyProject={userId === "hanson.pl"}
              isSelected={selectedProjectID === 6 ? true : false}
              id={6}
              title={"????????????????????? ????????? ???????????? ?????????"}
              writer={"hanson.pl"}
              status={"inProgress"}
              regDate={"2022/12/10"}
              content={"????????????????????? ????????? ???????????? ????????? ??????????????? ?????? ???????????????."}
              positionList={[{name: '??????', vacancy: 2}, {
                name: 'PL',
                vacancy: 1
              }]}
              cardSelectHandler={() => cardSelectHandler(6)}
              ref={el => (focusedProjectRef.current[6] = el)}
            />
          </div>
          <div className={'h-[284px]'}>
            <ProjectCard
              isMyProject={userId === "ray.nk"}
              isSelected={selectedProjectID === 7 ? true : false}
              id={7}
              title={"????????????????????? admin ?????? ??????"}
              writer={"ray.nk"}
              status={"inProgress"}
              regDate={"2022/12/10"}
              content={"???????????????????????? admin ?????? ????????? ?????? ?????????????????????."}
              positionList={[{name: 'backend', vacancy: 2}, {
                name: 'frontend',
                vacancy: 1
              }]}
              cardSelectHandler={() => cardSelectHandler(7)}
              ref={el => (focusedProjectRef.current[7] = el)}
            />
          </div>

          <Box sx={{height: '500px'}}></Box>
          {/*</SimpleGrid>*/}
        </div>

        {
          selectedProjectID !== null && selectedProjectID !== undefined ?
            <div className={'w-[calc(100%-390px)] h-[calc(100vh-60px)]'}>
              <ProjectDetail selectedProjectId={selectedProjectID}/>
            </div>
            : null
        }
      </div>
      {/*</div>*/}
    </Box>
  )
}

export default Projects;
