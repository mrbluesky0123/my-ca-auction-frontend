import { Link } from "react-router-dom";
// import {
//     Accordion,
//     AccordionItem,
//     AccordionButton,
//     AccordionPanel,
//     AccordionIcon,
//     Box,
//     Divider,
//   } from '@chakra-ui/react'
  import { BsDot } from "react-icons/bs";
  import {
    ArrowForwardIcon
  } from '@chakra-ui/icons'
  import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MuiAccordion from '@mui/material/Accordion';
import { styled } from '@mui/material/styles';
import { Divider } from "@mui/material";
const Menu = () => {
    const Accordion = styled((props) => (
        <MuiAccordion disableGutters elevation={0} square {...props} />
      ))(({ theme }) => ({
        border: `0px solid ${theme.palette.divider}`,
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
            color: 'red'
        },
        '&.Mui-expanded': {
            backgroundColor: `rgb(209, 238, 255)`,
            // border: `1px solid grey`
        }
      }));
    return (
        <>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>프로젝트</Typography>
        </AccordionSummary>
        <AccordionDetails
            className="bg-slate-100 hover:bg-slate-200">
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
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails
            className="bg-slate-50 hover:bg-slate-200">
            <Typography>
            <Link to="/projectcrew">프로젝트 구인</Link>
            </Typography>
        </AccordionDetails>
        <Divider />
        <AccordionDetails
            className="bg-slate-50 hover:bg-slate-200">
            <Typography>
            <Link to="/newproject">프로젝트 구직</Link>
            </Typography>
        </AccordionDetails>
      </Accordion>
      </>
        // <Accordion defaultIndex={[0]} allowMultiple>
        //     <AccordionItem>
        //         <AccordionButton>
        //             <Box flex='1' textAlign='left'>
        //                 <Link to="/">Home</Link>
        //             </Box>
        //         </AccordionButton>
        //     </AccordionItem>
        //     <AccordionItem >
        //         <AccordionButton>
        //             <Box flex='1' textAlign='left'>
        //                 프로젝트
        //             </Box>
        //             <AccordionIcon />
        //         </AccordionButton>
        //         <AccordionPanel h={9} className="hover:bg-slate-200">
        //             <div className="flex flex-row text-sm">
        //                 <Box flex='1' textAlign='left'>
        //                     <Link to="/projectcrew">프로젝트 구인</Link>
        //                 </Box>
        //             </div>
        //         </AccordionPanel>
        //         <AccordionPanel h={9} className="hover:bg-slate-200 align-middle">
        //             <div className="flex flex-row text-sm">
        //                 <Box flex='1' textAlign='left'>    
        //                     <Link to="/newproject">프로젝트 구직</Link>
        //                 </Box>
        //             </div>
        //         </AccordionPanel>
        //     </AccordionItem>

        //     <AccordionItem>
        //         <h2>
        //         <AccordionButton>
        //             <Box flex='1' textAlign='left'>
        //             Section 2 title
        //             </Box>
        //             <AccordionIcon />
        //         </AccordionButton>
        //         </h2>
        //         <AccordionPanel pb={4}>
        //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        //         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        //         veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        //         commodo consequat.
        //         </AccordionPanel>
        //     </AccordionItem>
        // </Accordion>
    )
    
}

export default Menu;