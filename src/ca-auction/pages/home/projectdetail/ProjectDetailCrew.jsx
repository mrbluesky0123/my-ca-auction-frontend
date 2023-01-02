import React, {useState} from "react";
import {
  alpha, Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {styled, useTheme} from "@mui/material/styles";
import PanToolIcon from '@mui/icons-material/PanTool';
import DoNotTouchIcon from '@mui/icons-material/DoNotTouch';
import CircularProgress from '@mui/material/CircularProgress';

const titleColumnSpace = 4;
const descriptionColumnSpace = 12 - titleColumnSpace;

const ProjectDetailCrew = ({
                             crewCount,
                             crewRoleName,
                             startDate,
                             endDate,
                             recruitEndDate,
                             recruitDescription,
                           }) => {
  const theme = useTheme();
  const [isApplied, setApplied] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const ApplySwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase': {
      color: theme.palette.primary[800],
      '&:hover': {
        backgroundColor: alpha(theme.palette.primary[800], 0.1),
      },
    },
    '& .MuiSwitch-track' : {
      backgroundColor: theme.palette.primary[800],
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: theme.palette.secondary[600],
      '&:hover': {
        backgroundColor: alpha(theme.palette.secondary[600], 0.1),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: theme.palette.secondary[600],
    },
  }));
  const eachSubject = (child) => {
    return (<div className={'flex'}>
      <ArrowRightIcon sx={{marginRight: '1px'}}/>
      <Typography sx={{fontSize: 'inherit'}}>
        {child}
      </Typography>
    </div>)
  };

  return (
    <>
      <Stack
        sx={{
          px: '0.5rem',
          mb: '1rem',
          mt: '0.2rem',
          maxWidth: '11rem',
          borderRadius: 3,
          // boxShadow: 1,
          // backgroundColor: `${isApplied? alpha(theme.palette.secondary[600], 0.1)
          //     :alpha(theme.palette.primary[600], 0.1)}`
        }}
          direction={"row"}>
        <Typography
          sx={{
            fontSize: '1rem',
            mt: '0.4rem',
            ml: '0.3rem',
            fontWeight: 'bold',
            color: `${isApplied? theme.palette.secondary[600] : theme.palette.primary[800]}`
          }}>
          {isApplied ? '지원철회' : '지원하기'}
        </Typography>
        {isLoading?
          <CircularProgress
            size={'1.9rem'}
            sx={{marginX: '1rem', mt: '0.3rem', mb: '0.2rem'}}
            color={isApplied? "secondary" : "primary"}
          /> :
          <ApplySwitch
            sx={{mr: "0.2rem"}}
            checked={isApplied}
            // size={'small'}
            color="secondary"
            onChange={() => {
            setApplied(!isApplied);
            console.log("@@@@", isApplied);
          }}
        />}
        {isApplied?
          <PanToolIcon sx={{mt: "0.4rem", fontSize: '1.5rem'}} color={"secondary"} /> :
          <DoNotTouchIcon sx={{mt: "0.35rem", fontSize: '1.7rem'}} color={"primary"}/>
        }
      </Stack>
      <div className={'flex max-w-[85rem] mb-6'}>
        <div className={'w-1/3'}>
          <Grid
            container
            gridTemplateColumns="4rem 4rem 4rem 4rem repeat(8,1fr)"
            spacing={1} sx={{marginBottom: 1, fontSize: '1.1rem', maxWidth: '85rem'}}
          >
            <Grid item xs={titleColumnSpace}>
              {eachSubject('투입인원')}
            </Grid>
            <Grid item xs={descriptionColumnSpace}>
              {crewCount}
            </Grid>
            <Grid item xs={titleColumnSpace}>
              {eachSubject('투입역할')}
            </Grid>
            <Grid item xs={descriptionColumnSpace}>
              {crewRoleName}
            </Grid>
            <Grid item xs={titleColumnSpace}>
              {eachSubject('투입시작일자')}
            </Grid>
            <Grid item xs={descriptionColumnSpace}>
              {startDate}
            </Grid>
            <Grid item xs={titleColumnSpace}>
              {eachSubject('투입종료일자')}
            </Grid>
            <Grid item xs={descriptionColumnSpace}>
              {endDate}
            </Grid>
            <Grid item xs={titleColumnSpace}>
              {eachSubject('모집마감일자')}
            </Grid>
            <Grid item xs={descriptionColumnSpace}>
              {recruitEndDate}
            </Grid>
            <Grid item xs={titleColumnSpace}>
              {eachSubject('지원여부')}
            </Grid>
            <Grid item xs={descriptionColumnSpace}>
              <Stack direction={"row"}>
                {isApplied?
                  <>
                    <PanToolIcon sx={{mt: "0.2rem", mr: "0.3rem", fontSize: '1rem'}} color={"secondary"} />
                    <Typography color={"secondary"}>
                      지원함
                    </Typography>
                  </> :
                  <>
                    <DoNotTouchIcon sx={{mt: "0.2rem", mr: "0.2rem", fontSize: '1.1rem'}} color={"primary"}/>
                    <Typography color={"primary"}>
                    지원하지않음
                    </Typography>
                  </>
                }
              </Stack>
            </Grid>
          </Grid>
        </div>
        <div className={'w-2/3'}>
          <Typography
            sx={{
              fontSize: '16px'
            }}>
            {eachSubject('모집내용')}
          </Typography>
          <Typography>
            <pre className={'whitespace-pre-line'}
                 style={{fontFamily: 'inherit', fontSize: '18px'}}>
              {recruitDescription}
            </pre>
          </Typography>
        </div>
      </div>
    </>
  )
}

export default ProjectDetailCrew;
