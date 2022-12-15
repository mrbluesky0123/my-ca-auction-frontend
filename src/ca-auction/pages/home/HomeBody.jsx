import Projects from "./projects/Projects";
import {useParams} from "react-router-dom";
import {useEffect} from "react";

const HomeBody = () => {
  const params = useParams()
  return (
    <Projects projectId={params.projectId}/>
  )
}

export default HomeBody;
