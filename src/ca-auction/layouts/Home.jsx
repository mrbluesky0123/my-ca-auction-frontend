import Sidebar from "./sidebar/Sidebar"
import Navbar from "./navbar/Navbar"
import Sample0 from "./contentsbody/Sample0"
import Sample1 from "./contentsbody/Sample1"
import Sample2 from "./contentsbody/Sample2"
import { Routes, Route} from "react-router-dom"
import { ResponsiveCalendar } from '@nivo/calendar'
import GanttChartExample from '../pages/GanttChartExample'

const Home = () => {
    const data = [
        {
          "value": 320,
          "day": "2015-08-30"
        },
        {
          "value": 294,
          "day": "2017-12-09"
        },
        {
          "value": 391,
          "day": "2016-12-01"
        },
        {
          "value": 353,
          "day": "2016-07-27"
        },
        {
          "value": 61,
          "day": "2016-01-06"
        },
        {
          "value": 319,
          "day": "2017-12-24"
        },
        {
          "value": 305,
          "day": "2016-01-12"
        },
        {
          "value": 257,
          "day": "2017-03-01"
        },
        {
          "value": 213,
          "day": "2016-05-05"
        },
    ]
    return (
        <>
            <div className="text-base w-screen h-screen">
                <div className="flex flex-row px-2 py-2 h-12">
                    <Navbar />
                </div>
                <div className="flex flex-row h-screen">
                    <div className="w-48 px-2.5 py-2.5">
                        <Sidebar/>
                    </div>    
                    <div className="w-screen">
                        <Routes>
                            <Route path="/" element={<Sample0 />} />
                            <Route path="/aaa" element={<Sample2 />} />
                            <Route path="/bbb" element={<GanttChartExample />} />
                        </Routes>
                    </div>
                
                </div>
            </div>
            {/* <div style={{color:'blue', height:'2000px'}}>
                <ResponsiveCalendar
                data={data}
                from="2015-03-01"
                to="2018-07-12"
                emptyColor="#eeeeee"
                colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
                margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
                yearSpacing={40}
                monthBorderColor="#ffffff"
                dayBorderWidth={2}
                dayBorderColor="#ffffff"
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'row',
                        translateY: 36,
                        itemCount: 4,
                        itemWidth: 42,
                        itemHeight: 36,
                        itemsSpacing: 14,
                        itemDirection: 'right-to-left'
                    }
                ]}
                /> 
            </div> */}
            
        </>
    )
}

export default Home;