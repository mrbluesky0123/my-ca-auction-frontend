import Sidebar from "./sidebar/Sidebar"
import Navbar from "./navbar/Navbar"
import Sample0 from "./contentsbody/Sample0"
import Sample1 from "./contentsbody/Sample1"
import ProjectCrew from "../pages/projectcrew/ProjectCrew"
import { Routes, Route} from "react-router-dom"
import { ResponsiveCalendar } from '@nivo/calendar'
import GanttChartExample from '../pages/GanttChartExample'
import HomeBody from "../pages/home/HomeBody"

const Home = () => {
    
    return (
        <>
            <div className="text-base w-screen h-screen">
                <div className="flex flex-row px-2 py-2 h-12">
                    <Navbar />
                </div>
                <div className="flex flex-row h-screen">
                    <div className="w-56 px-2.5 py-2.5">
                        <Sidebar/>
                    </div>    
                    <div className="w-screen px-2.5 py-2.5">
                        <Routes>
                            <Route path="/" element={<HomeBody />} />
                            <Route path="/projectcrew" element={<ProjectCrew />} />
                            <Route path="/bbb" element={<GanttChartExample />} />
                        </Routes>
                    </div>
                
                </div>
            </div>
            
        </>
    )
}

export default Home;