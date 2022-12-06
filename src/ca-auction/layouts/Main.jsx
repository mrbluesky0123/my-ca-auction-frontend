import Sidebar from "./sidebar/Sidebar"
import Navbar from "./navbar/Navbar"
import ProjectCrew from "../pages/projectcrew/ProjectCrew"
import {Routes, Route} from "react-router-dom"
import GanttChartExample from '../pages/GanttChartExample'
import HomeBody from "../pages/home/HomeBody"
import {ThemeProvider, createTheme} from '@mui/material/styles';
import {useState} from "react";


const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});


const Home = () => {
  const [isOpened, setOpened] = useState(true)
  const handleMenuOpenClose = () => {
    isOpened ? setOpened(false) : setOpened(true)
  }
  return (
    <>
      <div className="pr-56 text-base w-screen h-screen">
        <ThemeProvider theme={darkTheme}>
          <div className="flex flex-row px-2 py-2 h-12">
            <Navbar handleDrawerToggle={handleMenuOpenClose}/>
          </div>
          <div className="flex flex-row h-screen">
            <div className="w-96 px-2.5 py-2.5">
              <Sidebar drawerToggle={handleMenuOpenClose}
                       drawerOpen={isOpened}/>
            </div>
            <div className="w-screen px-2.5 py-2.5">
              <Routes>
                <Route path="/" element={<HomeBody/>}/>
                <Route path="/projectcrew" element={<ProjectCrew/>}/>
                <Route path="/bbb" element={<GanttChartExample/>}/>
              </Routes>
            </div>

          </div>
        </ThemeProvider>
      </div>


    </>
  )
}

export default Home;
