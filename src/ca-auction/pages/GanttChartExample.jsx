import { Chart } from "react-google-charts";

const daysToMilliseconds = (days) => {
    return days * 24 * 60 * 60 * 1000
}

const columns = [
    {type: "string", label: "Task ID"},
    {type: "string", label: "Task Name"},
    {type: "date", label: "Start Date"},
    {type: "date", label: "End Date"},
    {type: "number", label: "Duration"},
    {type: "number", label: "Percent Complete"},
    {type: "string", label: "Dependencies"},
]

const rows = [
    [
        "Research",
        "GAIA 프로젝트 수행",
        new Date(2015, 0, 1),
        new Date(2015, 0, 5),
        null,
        100,
        null,
    ], 
    [
        "Write",
        "DIVA 이관 프로젝트 수행",
        null,
        new Date(2015, 0, 9),
        daysToMilliseconds(3),
        25,
        null,
    ], 
    [
        "Cite",
        "PIGEON 유지보수 업무 수행",
        null,
        new Date(2015, 0, 7),
        daysToMilliseconds(1),
        20,
        null,
    ], 
    [
        "Complete",
        "GAIA admin 화면 제작",
        null,
        new Date(2015, 0, 10),
        daysToMilliseconds(1),
        0,
        null,
    ], 
    [
        "Outline",
        "CA auction",
        null,
        new Date(2015, 0, 6),
        daysToMilliseconds(1),
        100,
        null,
    ]
]

const data = [columns, ...rows]

const GanttChartExample = () => {
    return (
        <Chart chartType="Gantt" width="100%" height="50%" data={data} />
    )
}

export default GanttChartExample;