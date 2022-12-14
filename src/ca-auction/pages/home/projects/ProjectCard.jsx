import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Box from '@mui/material/Box';
import PersonIcon from '@mui/icons-material/Person';
import Card from "@mui/material/Card";
import * as React from "react";
import {styled, useTheme} from "@mui/material/styles";
import PositionTag from "./PositionTag";

const cardWidth = '350px';

const ProjectCard = ({isMyProject, id, title, writer, status, regDate, content, positionList, cardSelectHandler}) => {
  const theme = useTheme()
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

  const onCardClick = () => {
    cardSelectHandler(id)
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
    <Card
      sx={{
        margin: '10px',
        width: cardWidth,
        backgroundColor: getCardStyleByStatus().backgroundColor,
        "&:hover": {
          backgroundColor: getCardStyleByStatus().backgroundColorHover,
          cursor: "pointer"
        }
      }}
      elevation={1}
      onClick={() => onCardClick()} {...props} />
  ))(({theme}) => ({
    border: isMyProject ? `2px solid black` : `1px solid ${theme.palette.divider}`,
    backgroundColor: getCardStyleByStatus()
  }));

  const myProject = () => (
    <Box sx={{
        paddingX: '2px',
        // paddingTop: '1px',
        // paddingBottom: '4px',
        paddingY: '0px',
        marginLeft: '10px',
        marginTop: '2px',
        minWidth: 'full',
        height: '15px',
        border: `0.001rem none ${theme.palette.divider}`,
        // boxShadow: 1,
        borderRadius: 1,
        backgroundColor: '#fffd91',
        color: '#1da200',
        verticalAlign: 'center'
      }}
    >
        <Typography sx={{fontSize: '11px',}} >
          <PersonIcon sx={{
            fontSize: 'small',
            marginRight: '1px',
            marginBottom: '2px',
          }} className={'mr-[5px]'}/>
          {'Owner'}
        </Typography>
      </Box>
  )
  return (

    <ProjectCard>
      <CardContent sx={{minHeight: '188px'}}>
        <div className='flex flex-wrap align-sub'>
          <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
            {regDate}
          </Typography>
          {isMyProject? myProject() : null}
        </div>
        <Typography sx={{fontWeight: 'bold'}} variant="h6" component="div">
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
