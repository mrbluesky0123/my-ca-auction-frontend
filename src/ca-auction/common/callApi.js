import axios from 'axios';
import AlertDialog from "../components/AlertDialog";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { createPortal } from "react-dom";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function callApi({ url,
                                  method = 'get',
                                  params,
                                  data,
                                  responseType = 'json',
                                  isLoading = true,
                                  goErrorPageWhenFailed = false
                                }, config) {
  let api_url = BASE_URL + url;
  const target = document.getElementById('popup');
  return axios({
    method: method,
    url: api_url,
    params,
    data,
    isLoading,
    goErrorPageWhenFailed,
    responseType,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Access-Control-Allow-Origin': '*',
    },
    ...config
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      if(error.response === undefined) {
        console.log("Failed to connect server.");
        return <AlertDialog contents={'aaaaaaa'} isVisible={true} />;
      }
      if(error.response.status === 500) {
        console.log("Internal server error");
      } else {
        console.log("Failed to connect server.");
        throw error;
      }
      return {
        isSuccess: false,
        data: undefined,
        responseCode: error.response.responseCode,
        responseMessage: error.response.responseMessage
      }
    })
}
