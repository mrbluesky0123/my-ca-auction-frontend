import {Accordion, AccordionSummary, Box, Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import Analyze from "./analyze";

export default ({projectId}) => {
  // TODO Change to api call
  const getContent = (projectId) => {
    if (projectId === 1) {
      return {
        projectId: 1,
        projectName: "공공마이데이터",
        startDate: new Date(2022, 0, 1),
        endDate: new Date(2022, 11, 31),
        gitlabCommits: 100,
        agitPosts: 0
      }
    } else if (projectId === 2) {
      return {
        projectId: 2,
        projectName: "파기관리시스템",
        startDate: new Date(2022, 0, 1),
        endDate: new Date(2022, 11, 31),
        gitlabCommits: 99,
        agitPosts: 1
      }
    }

    return {
      projectId: 3,
      projectName: "가이아",
      startDate: new Date(2022, 0, 1),
      endDate: new Date(2022, 11, 31),
      gitlabCommits: 98,
      agitPosts: 2
    }
  }

  const {projectName, startDate, endDate, gitlabCommits, agitPosts} = getContent(projectId)

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon/>}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Box sx={{width: "33%", flexShrink: 0}}>
          <Typography>
            {projectName}
          </Typography>
          <Typography fontSize={"0.875em"}>
            {startDate.toLocaleDateString()} ~ {endDate.toLocaleDateString()}
          </Typography>
        </Box>
        <Analyze
          gitlabCommits={gitlabCommits}
          agitPosts={agitPosts}
        />
      </AccordionSummary>

      <AccordionDetails>
        <Typography>
          프로젝트 활동 내용
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
