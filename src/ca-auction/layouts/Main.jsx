import {useState} from "react";

import Menu from "./sidebar/Menu"
import Navbar from "./navbar/Navbar"
import ProjectCrew from "../pages/projectcrew/ProjectCrew"
import {Routes, Route} from "react-router-dom"
import GanttChartExample from '../pages/GanttChartExample'
import HomeBody from "../pages/home/HomeBody"
import {ThemeProvider, createTheme} from '@mui/material/styles';
import {CssBaseline} from '@mui/material';
import {styled, useTheme} from '@mui/material/styles';
import yellow from '@mui/material/colors/yellow'
import common from '@mui/material/colors/'
import MyProject from "../pages/my-project";


const darkTheme = createTheme({
  palette: {
    mode: 'light',
    primary: yellow,
  },
});

// const kakaobankTheme = createTheme({
//   palette: {
//
//   }
// })

const drawerWidth = 200;

const Home = () => {
  const [isOpened, setOpened] = useState(true)
  const theme = useTheme();
  const handleMenuOpenClose = () => {
    isOpened ? setOpened(false) : setOpened(true)
  }
  const MainDiv = styled('main', {shouldForwardProp: (prop) => prop !== 'open'})(({theme}) => ({
    // ...theme.typography.mainContent,
    paddingTop: 50,
    ...(!isOpened && {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      [theme.breakpoints.up('md')]: {
        marginLeft: -(drawerWidth - 20),
        width: `calc(100% - ${drawerWidth}px)`
      },
      [theme.breakpoints.down('md')]: {
        marginLeft: '20px',
        width: `calc(100% - ${drawerWidth}px)`,
        padding: '16px'
      },
      [theme.breakpoints.down('sm')]: {
        marginLeft: '10px',
        width: `calc(100% - ${drawerWidth}px)`,
        padding: '16px',
        marginRight: '10px'
      }
    }),
    ...(isOpened && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      width: `calc(100% - ${drawerWidth}px)`,
      [theme.breakpoints.down('md')]: {
        marginLeft: '150px'
      },
      [theme.breakpoints.down('sm')]: {
        marginLeft: '10px'
      }
    })
  }));

  return (
    <>

        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Navbar handleDrawerToggle={handleMenuOpenClose}/>
          <div className="flex flex-row">
            <Menu drawerToggle={handleMenuOpenClose} drawerOpen={isOpened}/>
            <MainDiv theme={theme}>
              <Routes>
                <Route path="/" element={<HomeBody/>}/>
                <Route path="/projectcrew" element={<ProjectCrew/>}/>
                <Route path="/newproject" element={<MyProject/>}/>
                <Route path="/aaa" element={<GanttChartExample/>}/>
              </Routes>
            </MainDiv>
            {/*</div>*/}

        </div>
      </ThemeProvider>


    </>
  )
}

export default Home;
