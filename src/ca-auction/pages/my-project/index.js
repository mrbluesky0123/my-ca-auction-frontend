import {Box, Card, CardContent, Typography} from "@mui/material";
import {Chart} from "react-google-charts";

// ref: https://developers.google.com/chart/interactive/docs/gallery/ganttchart#data-format
const columns = [
  {type: 'string', id: 'Name'},
  {type: 'string', id: 'Dummy'},
  {type: 'string', role: 'tooltip', p: {html: true}},
  {type: 'date', id: 'Start'},
  {type: 'date', id: 'End'},
];

function dateToDateString(date) {
  const yearString = date.getFullYear().toString().padStart(4, '0')
  const monthString = (date.getMonth() + 1).toString().padStart(2, '0')
  const dateString = date.getDate().toString().padStart(2, '0')

  return `${yearString}-${monthString}-${dateString}`
}

const getToolTip = (title, start, end, content) => {
  const startDateString = dateToDateString(start);
  const endDateString = dateToDateString(end);
  const diffDays = Math.abs((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;

  // react component 사용 불가능에 유의
  return `
    <div class="p-2 whitespace-nowrap">
      <p class="text-lg font-bold mb-5">${title}</p>
      <p><span class="font-bold">기간: </span>${startDateString} ~ ${endDateString} (${diffDays}일)</p>
      <p><span class="font-bold">내용: </span>${content}</p>
    </div>
  `;
}

const getRow = (title, start, end, content) =>
  [title, null, getToolTip(title, start, end, content), start, end]

const rows = [
  getRow('통합단말 개발', new Date(2022, 0, 7), new Date(2022, 1, 4), "겁나 열심히 만들기"),
  getRow('가이아 개발', new Date(2022, 0, 1), new Date(2022, 11, 31), "아아 1년이 가이아로 가득해")
];

export const data = [columns, ...rows];

export const options = {
  height: 275,
  title: "2022년",
  hAxis: {
    minValue: new Date(2022, 0, 1),
    maxValue: new Date(2022, 11, 31)
  }
};

const Page = () => {
  return (
    <Box sx={{minWidth: 275}} mt={2}>
      <Card variant={"elevation"}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Timeline
          </Typography>
          <Typography mt={4} mb={2} color="text.secondary" gutterBottom>
            2022년
          </Typography>

          <Chart
            chartType="Timeline"
            data={data}
            options={options}
          />
        </CardContent>
      </Card>
    </Box>
  )
}

export default Page
