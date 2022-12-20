import React from "react";
import {Button, TextField} from "@mui/material";
import {styled} from '@mui/material/styles';
import * as colors from '@mui/material/colors';
import {useNavigate} from "react-router-dom";


const Login = (props) => {
  const navigate = useNavigate();
  const ColorButton = styled(Button)(({theme}) => ({
    color: theme.palette.getContrastText(colors.amber[500]),
    backgroundColor: colors.amber[500],
    '&:hover': {
      backgroundColor: colors.amber[700],
    },
  }));
  const onLoginButtonClick = () => {
    return navigate('/main/project/')
  }

  return (

    <div
      className="fixed flex w-[100%] h-[100%]  grid grid-cols-6 gap-4 content-center">

      <div></div>
      <div></div>
      <div className="bg-amber-200">
        <TextField className={"w-[100%]"} label="ID"/>
      </div>
      <div className="flex  row-span-2 content-center">
        <ColorButton className={"w-[70%]"} onClick={() => onLoginButtonClick()} variant="contained">Login</ColorButton>
      </div>
      <div></div>
      <div></div>


      <div></div>
      <div></div>

      <div className="bg-amber-200">
        <TextField className={"w-[100%]"}
                   label="PASSWORD"
                   type={"password"}
        />
      </div>

    </div>

  );
}

export default Login;
