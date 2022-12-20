import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";
import Badge from '@mui/material/Badge';
import * as React from "react";
import { useTheme } from '@mui/material/styles';
import {blue, cyan, green, lightGreen, orange, purple, red} from "@mui/material/colors";


const PositionTag = ({positionName, vacancy}) => {
  const theme = useTheme();
  const getPositionTagColorStyle = () => {
    switch (positionName) {
      case 'frontend':
        return {backgroundColor: red[100], textColor: red[800]}
      case 'backend':
        return {backgroundColor: lightGreen[100], textColor: lightGreen[900]}
      case 'PL':
        return {backgroundColor: purple[100], textColor: purple[900]}
      case '계정계':
        return {backgroundColor: cyan[100], textColor: cyan[900]}
      case '기획':
        return {backgroundColor: orange[100], textColor: orange[900]}
      default:
        return {backgroundColor: blue[100], textColor: blue[900]}
    }
  }
  const tagColor = getPositionTagColorStyle()

  return (
    <Badge
      badgeContent={vacancy}
      color={'secondary'}
      sx={{
        "& .MuiBadge-badge": { fontSize: 11, minWidth: 12, border: `0.001rem solid ${theme.palette.divider}`,},
        marginX: '7px',
        marginY: '3px',

      }}
    >
      <Box sx={{
        paddingX: '10px',
        paddingY: '4px',
        minWidth: 'full',
        height: '30px',
        border: `0.001rem solid ${theme.palette.divider}`,
        // boxShadow: 1,
        borderRadius: 2,
        backgroundColor: tagColor.backgroundColor,
        color: tagColor.textColor,
      }}>
        <Typography sx={{fontSize: '13px'}} pb={5}>
          {positionName}
        </Typography>
      </Box>
    </Badge>
  )
}

export default PositionTag;
