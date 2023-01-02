import {useState} from "react";
import Menu from "./sidebar/Menu"
import Navbar from "./navbar/Navbar"
import ProjectCrew from "../pages/projectcrew/ProjectCrew"
import {Route, Routes} from "react-router-dom"
import GanttChartExample from '../pages/GanttChartExample'
import HomeBody from "../pages/home/HomeBody"
import {
  createTheme,
  styled,
  ThemeProvider,
  useTheme
} from '@mui/material/styles';
import {CssBaseline} from '@mui/material';
import yellow from '@mui/material/colors/yellow'
import MyProject from "../pages/my-project";
import {green, indigo, pink, purple} from "@mui/material/colors";


const darkTheme = createTheme({
  palette: {
    mode: 'light',
    primary: yellow,
  },
});

const customTheme = createTheme({
  palette: {
    primary: indigo,
    secondary: pink
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 2090,
    },
  },
})

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
  const MainDiv = styled('main', {
      shouldForwardProp: (prop) => prop !== 'open'
    }
  )(({theme}) => ({
    // ...theme.typography.mainContent,
    marginTop: 50,
    // height: '100vh',
    ...(!isOpened && {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        // marginLeft: -(drawerWidth - 20),
        // width: `calc(100% - ${drawerWidth}px)`
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
      <ThemeProvider theme={customTheme}>
        <CssBaseline/>
        <Navbar handleDrawerToggle={handleMenuOpenClose}/>
        <div className="flex flex-row overflow-hidden">
          <Menu drawerToggle={handleMenuOpenClose} drawerOpen={isOpened}/>
          <MainDiv theme={theme}>
            <Routes>
              <Route exact path="/project/:projectId" element={<HomeBody/>}/>
              <Route path="/project/*" element={<HomeBody/>}/>
              <Route exact path="/projectcrew/:projectId" element={<ProjectCrew/>}/>
              <Route path="/projectcrew/*" element={<ProjectCrew/>}/>
              <Route path="/newproject" element={<MyProject/>}/>
              <Route path="/my-project" element={<MyProject/>}/>
            </Routes>
          </MainDiv>
        </div>
      </ThemeProvider>
    </>
  )
}

export default Home;
