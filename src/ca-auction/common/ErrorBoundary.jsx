import {createPortal} from "react-dom";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import React from "react";
const target = document.getElementById('popup');
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // 다음 렌더링에서 폴백 UI가 보이도록 상태를 업데이트 합니다.
    console.log("!!!!!!!!!!!!!!!!! ", error);
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // 에러 리포팅 서비스에 에러를 기록할 수도 있습니다.
    console.log("!!!!!!!!!!!!!!!!! ", error)
    this.setState({
      hasError: true
    })
  }

  render() {
    if (this.state.hasError) {
      // 폴백 UI를 커스텀하여 렌더링할 수 있습니다.
      return createPortal((
        <>
          <Dialog
            open={true}
            // onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"시스템오류"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {'aaaaaa'}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => console.log("!!!")}>확인</Button>
            </DialogActions>
          </Dialog>
        </>), target);
    }

    return this.props.children;
  }
}

export default ErrorBoundary;