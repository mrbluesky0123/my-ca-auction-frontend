import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Box from '@mui/material/Box';
import PersonIcon from '@mui/icons-material/Person';
import Card from "@mui/material/Card";
import * as React from "react";
import {styled, useTheme} from "@mui/material/styles";
import PositionTag from "./PositionTag";
import {Link} from "react-router-dom";
import {blueGrey, grey} from "@mui/material/colors";

const cardWidth = '350px';

const ProjectCard = ({isMyProject, isSelected, id, title, writer, status, regDate, content, positionList, cardSelectHandler}) => {
  const theme = useTheme()
  const primaryColor = theme.palette.primary
  const secondaryColor = theme.palette.secondary
  const getCardStyleByStatus = () => {
    let color = {}
    isSelected?
      color = {backgroundColor: primaryColor[800], fontColor: primaryColor[50], subFontColor: primaryColor[200]} :
      color = {backgroundColor: "#ffffff", fontColor: theme.palette.text.primary, subFontColor: theme.palette.text.secondary};
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
        width: cardWidth,
        height: '272px',
        marginX: '10px',
        // marginY: '10px',
        // marginY: '10px',
        border: `1px solid ${theme.palette.divider}`,
        backgroundColor: getCardStyleByStatus().backgroundColor,
        "&:hover": {
          border: '2px solid',
          cursor: "pointer"
        }
      }}
      elevation={2}
      onClick={() => onCardClick()}
      {...props}
    />
  ))(({theme}) => ({

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
      <div className={'relative'}>
        {
          status === 'complete' ?
            <div className={'absolute top-[180px] left-[260px] z-10'}>
              <img
                // className='absolute top-[-100px] bottom-[0px] right-[10px] left-[200px]'
                width='80px'
                height='80px'
                objectFit='none'
                src='/image/complete.png'
                alt='complete'
              />
            </div>: null
        }
      </div>
      <CardContent sx={{minHeight: '210px'}}>
        <div className='flex flex-wrap align-sub'>
          <Typography sx={{fontSize: 14}} color={getCardStyleByStatus().subFontColor} gutterBottom>
            {regDate}
          </Typography>
          {isMyProject? myProject() : null}
        </div>
        <Typography sx={{fontWeight: 'bold', color: getCardStyleByStatus().fontColor}} variant="h6" component="div">
          <Link to="/main/project/1">{title}</Link>
        </Typography>
        <Typography sx={{fontSize: 12, mb: 1.5}} color={getCardStyleByStatus().subFontColor}>
          {writer}{bull}{getStatusDescriptionByStatus()}
        </Typography>
        <Typography sx={{fontSize: 15, color: getCardStyleByStatus().fontColor}}>
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
