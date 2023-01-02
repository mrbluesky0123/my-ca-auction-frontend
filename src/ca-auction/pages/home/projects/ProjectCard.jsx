import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Box from '@mui/material/Box';
import Card from "@mui/material/Card";
import * as React from "react";
import {styled, useTheme} from "@mui/material/styles";
import PositionTag from "./PositionTag";
import {Link} from "react-router-dom";
import {Stack} from "@mui/material";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const cardWidth = '350px';

const ProjectCard = ({isMyProject, isSelected, id, title, writer, status, regDate, content, positionList, cardSelectHandler}) => {
  const theme = useTheme()
  const primaryColor = theme.palette.primary
  const secondaryColor = theme.palette.secondary
  const getCardStyleByStatus = () => {
    let color = {}
    isSelected?
      color = {backgroundColor: primaryColor[900], fontColor: primaryColor[50], subFontColor: primaryColor[200]} :
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
        boxShadow: 2,
        "&:hover": {
          border: isSelected? `1px solid ${theme.palette.secondary['600']}` : `1px solid`,
          // boxShadow: 12,
          cursor: "pointer"
        }
      }}
      // elevation={3}
      onClick={() => onCardClick()}
      {...props}
    />
  ))(({theme}) => ({

  }));

  const myProject = () => (
    <Box sx={{
      // paddingBottom: '0.1rem',
      paddingBottom: '1rem',
      marginLeft: '0.5rem',
      marginTop: '3px',
      width: '3.8rem',
      height: '1rem',
      borderRadius: 1,
      backgroundColor: theme.palette.primary[100],
      color: theme.palette.primary[900],
    }}
    >

      <Stack sx={{marginY: 0}} direction={"row"}>
        <EmojiEventsIcon sx={{
          fontSize: 'medium',
        }}/>
        <Typography sx={{fontSize: '0.7rem', fontWeight: 'bold', mb: '0rem'}} >
          {'OWNER'}
        </Typography>
      </Stack>
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
          <Typography sx={{fontSize: '0.9rem'}} color={getCardStyleByStatus().subFontColor} gutterBottom>
            {regDate}
          </Typography>
          {isMyProject? myProject() : null}
        </div>
        <Typography sx={{fontWeight: 'bold', color: getCardStyleByStatus().fontColor}} variant="h6" component="div">
          <Link to="/main/project/1">{title}</Link>
        </Typography>
        <Typography sx={{fontSize: '0.8rem', mb: 1.5}} color={getCardStyleByStatus().subFontColor}>
          {writer}{bull}{getStatusDescriptionByStatus()}
        </Typography>
        <Typography sx={{fontSize: '0.85rem', color: getCardStyleByStatus().fontColor}}>
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
