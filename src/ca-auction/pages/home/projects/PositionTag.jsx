import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";
import Badge from '@mui/material/Badge';
import * as React from "react";
import { useTheme } from '@mui/material/styles';


const PositionTag = ({positionName, vacancy}) => {
  const theme = useTheme();
  const getPositionTagColorStyle = () => {
    switch (positionName) {
      case 'frontend':
        return {backgroundColor: '#ffe0de', textColor: '#ba0b00'}
      case 'backend':
        return {backgroundColor: '#e7ffe0', textColor: '#1e8000'}
      case 'PL':
        return {backgroundColor: '#e6e7ff', textColor: '#0006a6'}
      case '계정계':
        return {backgroundColor: '#fee8ff', textColor: '#6d0073'}
      case '기획':
        return {backgroundColor: '#ffdfa8', textColor: '#cc5d02'}
      default:
        return {backgroundColor: '#d9fff3', textColor: '#000000'}
    }
  }
  const tagColor = getPositionTagColorStyle()

  return (
    <Badge
      badgeContent={vacancy}
      color={'primary'}
      sx={{
        "& .MuiBadge-badge": { fontSize: 11, height: 14, minWidth: 12, border: `0.001rem solid ${theme.palette.divider}`,},
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
