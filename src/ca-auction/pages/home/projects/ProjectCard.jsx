import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Box from '@mui/material/Box';
import Card from "@mui/material/Card";
import * as React from "react";
import {styled} from "@mui/material/styles";
import PositionTag from "./PositionTag";


const ProjectCard = ({isMyProject, id, title, writer, status, regDate, content, positionList}) => {
  const getCardStyleByStatus = () => {
    let color = {}
    switch (status) {
      case "inProgress":
        color = {backgroundColor: "#ffffff", backgroundColorHover: "rgba(255,255,188,0.34)"};
        break;
      case "complete":
        color = {backgroundColor: "#eaeaea", backgroundColorHover: "#e5e5e5"};
        break;
      default:
        color = {backgroundColor: "#ffffff", backgroundColorHover: "rgba(255,255,188,0.34)"};
        break;
    }
    return color;
  }
  const getStatusDescriptionByStatus = () => {
    switch (status) {
      case "inProgress":
        return "모집진행중";
      case "complete":
        return "모집완료";
      default:
        return "모집진행중";
    }
  }
  const bull = (
    <Box
      component="span"
      sx={{display: 'inline-block', mx: '4px', transform: 'scale(0.8)'}}
    >
      •
    </Box>
  );
  const ProjectCard = styled((props) => (
    <Card sx={{
      margin: '10px',
      width: '350px',
      backgroundColor: getCardStyleByStatus().backgroundColor,
      "&:hover": {
        backgroundColor: getCardStyleByStatus().backgroundColorHover,
        cursor: "pointer"
      }
    }} elevation={1} {...props} />
  ))(({theme}) => ({
    border: isMyProject ? `2px solid black` : `1px solid ${theme.palette.divider}`,
    backgroundColor: getCardStyleByStatus()
  }));

  return (
    <ProjectCard>
      <CardContent sx={{minHeight: '188px'}}>
        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
          {regDate}
        </Typography>
        <Typography sx={{fontWeight: 'normal'}} variant="h6" component="div">
          {title}
        </Typography>
        <Typography sx={{fontSize: 12, mb: 1.5}} color="text.secondary">
          {writer}{bull}{getStatusDescriptionByStatus()}
        </Typography>
        <Typography sx={{fontSize: 15}}>
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        {/*<Button size="small" color="secondary">Learn More</Button>*/}
        <div className='flex flex-wrap'>
          {positionList && positionList.map((position) => {
            return <PositionTag positionName={position.name} vacancy={position.vacancy}/>
          })}
        </div>
      </CardActions>
    </ProjectCard>
  )

}

export default ProjectCard;