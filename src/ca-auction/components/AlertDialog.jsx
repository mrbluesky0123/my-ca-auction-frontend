import * as React from 'react';
import {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {createPortal} from "react-dom";
import {useTheme} from '@mui/material/styles';
import ErrorIcon from '@mui/icons-material/Error';
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {Stack} from "@mui/material";


export default function AlertDialog({title, contents, isErrorDialog, callbackFunction, isVisible}) {
  const [isOpened, setOpened] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    setOpened(isVisible);
  }, [])

  const handleButtonClick = () => {
    setOpened(false);
    if (callbackFunction !== null || callbackFunction !== undefined) {
      callbackFunction();
    }
  };
  const dialogIcon = () => {
    if (isErrorDialog === null) {
      return null;
    }
    return isErrorDialog ? <ErrorIcon sx={{
      fontSize: '5rem',
      fontWeight: 'bold',
      marginBottom: '0.3rem',
      marginTop: '1rem',
      color: 'red'
    }}/> : <CheckCircleIcon sx={{
      fontSize: '5rem',
      fontWeight: 'bold',
      marginY: '0.3rem',
      marginTop: '0.5rem',
      color: 'green'
    }}/>
  }

  return (
    <Dialog
      open={isVisible}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Stack sx={{
        paddingTop: '1rem',
        paddingBottom: '0rem',
        width: '27rem'
      }} direction={"column"} alignItems={"center"}>
        {dialogIcon()}
        {title && <DialogTitle
          id="alert-dialog-title"
          sx={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: theme.palette.text.primary,
            paddingY: '0rem',
            // paddingX: '0.8rem',
            '&.MuiDialogTitle-root': {
              // backgroundColor: theme.palette.primary[800],
            },
          }}
        >
          {title}
        </DialogTitle>}
        <DialogContent>
          <DialogContentText sx={{mt: '0.8rem'}} id="alert-dialog-description">
            {contents}
          </DialogContentText>
        </DialogContent>
      </Stack>
      <DialogActions>
        <Button sx={{
          paddingY: '0.1rem',
          '&.MuiButton-root': {
            // bgColor: ,
            border: "1px solid #1a237e",
            color: '#1a237e',
            elevation: 0,
            variant: "outlined"
          },
          "&:hover": {
            backgroundColor: "#1a237e",
            color: 'white',
            elevation: 0
          }
        }}
                color={"secondary"}
                onClick={handleButtonClick}>확인</Button>
      </DialogActions>
    </Dialog>
  );
}
