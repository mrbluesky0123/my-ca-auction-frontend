import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { createPortal } from "react-dom";

export default function AlertDialog({contents, isVisible}) {
  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return createPortal(
    (<>
      {/*<Button variant="contained"*/}
      {/*        sx={{textTransform: 'unset', margin: "0.25em"}}*/}
      {/*        onClick={handleClickOpen}>{props.name}</Button>*/}
      <Dialog
        open={isVisible}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"시스템오류"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {contents}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => console.log("!!!")}>확인</Button>
        </DialogActions>
      </Dialog>
    </>), document.getElementById("popup")
  );
}
