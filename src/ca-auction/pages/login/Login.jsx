import React, {useState} from "react";
import {Button, TextField} from "@mui/material";
import {styled} from '@mui/material/styles';
import * as colors from '@mui/material/colors';
import {useNavigate} from "react-router-dom";
import axios from 'axios';


const LOGIN_URL = "http://172.19.111.235:8080/api/v1/login";
const Login = (props) => {
  const [ldapId, setLdapId] = useState(""); //프로젝트 명
  const [ldapPassword, setLdapPassword] = useState(""); //프로젝트 명
  const navigate = useNavigate();
  const ColorButton = styled(Button)(({theme}) => ({
    color: theme.palette.getContrastText(colors.amber[500]),
    backgroundColor: colors.amber[500],
    '&:hover': {
      backgroundColor: colors.amber[700],
    },
  }));
  const onLoginButtonClick = () => {
    if(isValidIdAndPasswordInput()) {
      alert("아이디와 비밀번호를 입력해주세요.");
      resetIdAndPassword();
      return;
    }
    axios.post(LOGIN_URL, {
      id: ldapId, // 입력값
      password: ldapPassword // 입력값
    }, {
      withCredentials: true
    })
      .then(function (response) {
        if(response.data.code === "401") {
          // 로그인 실패시
          alert("아이디 혹은 비밀번호가 잘못되었습니다.");
          // + 아이디, 패스워드 입력값 초기화 시키기
          resetIdAndPassword();
        }else {
          // 로그인 성공시
          alert("Ok");
          return navigate('/main/project/')
        }
      })
      .catch(function (error) {
        console.log(error)
      })
    ;
    return
    // return navigate('/main/project/')
  }

  function isValidIdAndPasswordInput() {
    return ldapId.trim().length < 1 || ldapPassword.trim().length < 1
  }
  function resetIdAndPassword() {
    setLdapId('');
    setLdapPassword('');
  }

  return (

    <div
      className="fixed flex w-[100%] h-[100%]  grid grid-cols-6 gap-4 content-center">

      <div></div>
      <div></div>
      <div className="bg-amber-200">
        <TextField className={"w-[100%]"} label="ID" value={ldapId} onChange={(e) => setLdapId(e.target.value)}/>
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
                   value={ldapPassword}
                   onChange={(e) => setLdapPassword(e.target.value)}
                   type={"password"}
        />
      </div>

    </div>

  );
}

export default Login;
