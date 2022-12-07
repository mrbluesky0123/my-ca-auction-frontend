import { useTheme } from '@mui/material/styles';
import {Box, Drawer, useMediaQuery} from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MuiAccordion from '@mui/material/Accordion';
import {styled} from '@mui/material/styles';
import {Divider} from "@mui/material";
import {Link} from "react-router-dom";

const drawerWidth = 200;
const Menu = ({drawerOpen, drawerToggle, window}) => {
  const theme = useTheme();
  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({theme}) => ({
    border: `0px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
      color: 'red'
    },
    '&.MuiAccordion-root': {
      '&.Mui-expanded': {
        background: theme.palette.primary,
        border: `none`,
      }
    }
  }));
  const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));

  const drawer = (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
        >
          <Typography>프로젝트</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Link to="/projectcrew">프로젝트 구인</Link>
          </Typography>
        </AccordionDetails>

        <AccordionDetails
          className="bg-slate-100 hover:bg-slate-200">
          <Typography>
            <Link to="/newproject">프로젝트 구직</Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails
          className="bg-slate-50 hover:bg-slate-200">
          <Typography>
            <Link to="/projectcrew">프로젝트 구인</Link>
          </Typography>
        </AccordionDetails>
        <Divider/>
        <AccordionDetails
          className="bg-slate-50 hover:bg-slate-200">
          <Typography>
            <Link to="/newproject">프로젝트 구직</Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );

  const container = window !== undefined ? () => window.document.body : undefined;

  return (
    <Box component="nav"
         sx={{
           flexShrink: {md: 0},
           width: matchUpMd ? drawerWidth : 'auto',
        }}
         aria-label="mailbox folders">
      <Drawer
        container={container}
        variant={matchUpMd ? 'persistent' : 'temporary'}
        anchor="left"
        open={drawerOpen}
        onClose={drawerToggle}
        sx={{
          border: theme.palette.divider,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            backgroundColor: theme.palette.background.default,
            // background: 'white',
            color: theme.palette.text.primary,
            borderRightColor: theme.palette.divider,
            [theme.breakpoints.up('md')]: {
              top: '55px'
            },
            elevation: 2
          },
        }}
        ModalProps={{keepMounted: true}}
        color="inherit"
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Menu;
