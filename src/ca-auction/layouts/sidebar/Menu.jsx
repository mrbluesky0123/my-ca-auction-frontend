import { useTheme } from '@mui/material/styles';
import {Box, Button, ButtonBase, Drawer, useMediaQuery} from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MuiAccordion from '@mui/material/Accordion';
import {styled} from '@mui/material/styles';
import {Divider} from "@mui/material";
import {Link} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import ComputerIcon from '@mui/icons-material/Computer';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import PersonIcon from '@mui/icons-material/Person';

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

  const MenuButton = styled((props) => (
    <Button alignLeft elevation={0} color={'secondary'}  {...props} />
  ))(({theme}) => ({
    paddingLeft: '20px',
    fontSize: '1rem',
    fontWeight: 'bold',
    border: `0px solid`,
    width: '200px',
    height: '40px',
    justifyContent: "flex-start",
    '&.MuiButton-root': {

    }
  }));
  const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));

  const drawer = (
    <>
      <MenuButton startIcon={<HomeIcon/>}><Link to="/">홈</Link></MenuButton>
      <MenuButton startIcon={<ComputerIcon/>}><Link to="/projectcrew">프로젝트 등록</Link></MenuButton>
      <MenuButton startIcon={<DeveloperBoardIcon/>}><Link to="/newproject">프로젝트 구직</Link></MenuButton>
      <MenuButton startIcon={<PersonIcon/>}><Link to="/">내 프로젝트</Link></MenuButton>
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
