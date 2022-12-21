import Content from "./content";
import {Box, Card, CardContent, IconButton, Typography} from "@mui/material";
import {NavigateBefore, NavigateNext} from "@mui/icons-material";
import {useEffect, useState} from "react";

export default () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [projectIds, setProjectIds] = useState([]);

  // TODO Change to api call
  useEffect(() => {
      setProjectIds(() => [1, 2, 3]);
    },
    [year]
  )

  return (
    <Card sx={{margin: 3}}>
      <CardContent>
        <Box className={"flex place-content-between"}>
          <Typography sx={{marginBottom: 1.5}} variant={"h5"} component={"div"}>내 프로젝트</Typography>
          <Box className={"flex items-center"}>
            <IconButton onClick={() => setYear(() => year - 1)}><NavigateBefore/></IconButton>
            <Typography>{year} 년</Typography>
            <IconButton onClick={() => setYear(() => year + 1)}><NavigateNext/></IconButton>
          </Box>
        </Box>

        {
          projectIds.map(projectId =>
            <Content projectId={projectId}/>
          )
        }
      </CardContent>
    </Card>
  )
}
