import React, {useState} from "react";
import {Button, TextField} from "@mui/material";
import {styled} from '@mui/material/styles';
import * as colors from '@mui/material/colors';
import {useNavigate} from "react-router-dom";
import axios from 'axios';

// TODO 로그인 페이지 접근시 기존에 가지고있는 토큰이 있다면 메인페이지로 넘겨야 한다
// 1. 만료된 토큰을 가지고있는 경우라면 어떻게 해야할까?
//    - 토큰 저장시 기한을 두거나, 메인 페이지로 넘기면 api 콜을 할것이고 api 에서 만료된 토큰이라는 응답이 올 것


// TODO Login URL 서버 환경에 맞춰서 변경해줘야함(ex. local, dev, test, production etc)
const LOGIN_URL = "http://172.19.111.235:8080/api/v1/login";
const Login = (props) => {
  const [ldapId, setLdapId] = useState("");
  const [ldapPassword, setLdapPassword] = useState("");
  const navigate = useNavigate();
  const ColorButton = styled(Button)(({theme}) => ({
    color: theme.palette.getContrastText(colors.amber[500]),
    backgroundColor: colors.amber[500],
    '&:hover': {
      backgroundColor: colors.amber[700],
    },
  }));
  const onLoginButtonClick = () => {
    if (isValidIdAndPasswordInput()) {
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
        console.log(response);
        if (response.data.code === "401") {
          // 로그인 실패시
          alert("아이디 혹은 비밀번호가 잘못되었습니다.");
          // + 아이디, 패스워드 입력값 초기화 시키기
          resetIdAndPassword();
        } else {
          // TODO 로그인 성공시 토큰 값 내부 저장소에 저장
          console.log(response.data)
          console.log(response.data.message.accessToken)

          // return navigate('/main/project/')
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
