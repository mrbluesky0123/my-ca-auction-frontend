import React, {useContext, useState} from "react";
import {Button, TextField} from "@mui/material";
import {styled, useTheme} from '@mui/material/styles';
import * as colors from '@mui/material/colors';
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import jwt_decode from "jwt-decode";
import {GlobalCommonContext} from "../../common/GlobalContext";

// TODO 로그인 페이지 접근시 기존에 가지고있는 토큰이 있다면 메인페이지로 넘겨야 한다
// 1. 만료된 토큰을 가지고있는 경우라면 어떻게 해야할까?
//    - 토큰 저장시 기한을 두거나, 메인 페이지로 넘기면 api 콜을 할것이고 api 에서 만료된 토큰이라는 응답이 올 것


// TODO Login URL 서버 환경에 맞춰서 변경해줘야함(ex. local, dev, test, production etc)
const LOGIN_URL = "http://localhost:8080/v1/login";
const Login = (props) => {
  const theme = useTheme();
  const [ldapId, setLdapId] = useState("");
  const [ldapPassword, setLdapPassword] = useState("");
  const navigate = useNavigate();
  const {setUserId, setUserRole} = useContext(GlobalCommonContext);
  const ColorButton = styled(Button)(({theme}) => ({
    '&.MuiButton-root': {
      backgroundColor: '#1a237e',
      // border: "1px solid #1a237e",
      color: theme.palette.primary.contrastText,
      elevation: 1,
      variant: "outlined"
    },
    "&:hover": {
      backgroundColor: "#283593",
      color: 'white',
      elevation: 0
    },
    fontSize: '1.5rem'
    // backgroundColor: theme.palette.primary[900],
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
        if (response.data.code === "401") {
          // 로그인 실패 시
          alert("아이디 혹은 비밀번호가 잘못되었습니다.");
          resetIdAndPassword();
        } else {
          // 로그인 성공 시
          // 로컬스토리지에 토큰 저장
          localStorage.setItem("accessToken", response.data.message.access_token);
          if(response.data.message.access_token !== null || response.data.message.access_token !== undefined) {
            // 토큰 파싱한 값을 context에 저장
            const parsedToken = jwt_decode(response.data.message.access_token );
            console.log("@@@@", parsedToken);
            parsedToken.sub.startsWith("dev-") ?
              localStorage.setItem("userId", parsedToken.sub.substring(4, parsedToken.sub.length))
              : localStorage.setItem("userId", setUserId(parsedToken.sub));
            localStorage.setItem("userRole", parsedToken.role);

          }
          navigate('/main/project/')
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

  const parseJwt = (token) => {
    let base64Payload = token.split('.')[1]; //value 0 -> header, 1 -> payload, 2 -> VERIFY SIGNATURE
    let payload = Buffer.from(base64Payload, 'base64');
    let result = JSON.parse(payload.toString());
    return result;
  }

  return (

    <div className="fixed flex w-[100%] h-[100%]  grid grid-cols-6 gap-4 content-center">
      <div></div>
      <div></div>
      <TextField className={"w-[100%]"} label="ID" value={ldapId} onChange={(e) => setLdapId(e.target.value)}/>
      <div className="flex row-span-2 content-center">
        <ColorButton className={"w-[70%]"} onClick={() => onLoginButtonClick()} variant="contained">Login</ColorButton>
      </div>
      <div></div>
      <div></div>


      <div></div>
      <div></div>

      {/*<div className="bg-amber-200">*/}
      <TextField className={"w-[100%]"}
                 label="PASSWORD"
                 value={ldapPassword}
                 onChange={(e) => setLdapPassword(e.target.value)}
                 type={"password"}
      />
      {/*</div>*/}

    </div>

  );
}

export default Login;
