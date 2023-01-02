import axios from 'axios';
import AlertDialog from "../components/AlertDialog";
import {createRoot} from 'react-dom/client';

const BASE_URL = process.env.REACT_APP_BASE_URL;
export default function callApi({
                                  url, method = 'get', params, data,
                                  responseType = 'json', isLoading = true, goErrorPageWhenFailed = false
                                }, config) {

  const popupContainer = document.getElementById('popup');
  const popup = createRoot(popupContainer);
  let api_url = '';
  if (url.startsWith('http')) {
    console.log("!!!!!!!! ", url);
    api_url = url;
  } else {
    console.log("!!!!!!!!2222 ", url);
    api_url = BASE_URL + url;
  }
  return axios({
    method: method,
    url: api_url,
    params,
    data,
    isLoading,
    goErrorPageWhenFailed,
    responseType,
    headers: {
      'Authorization': localStorage.getItem("accessToken"),
      // 'Access-Control-Allow-Origin': '*'
    },
  })
    .then((response) => {
      if (method !== "get") {
        let title = "성공!"
        let contents = "정상 처리되었습니다."
        popup.render(<AlertDialog title={title}
                                  contents={contents}
                                  isVisible={true}
                                  isErrorDialog={false}
        />);
      }

      return response;
    })
    .catch((error) => {
      if (error.response === undefined || error.response.status === 500) {
        let title = "오류 발생"
        let contents = "시스템 오류입니다. 관리자에게 문의하세요."
        popup.render(<AlertDialog title={title}
                                  contents={contents}
                                  isVisible={true}
                                  isErrorDialog={true}
        />);
        return;
      }

      if (error.response.status === 400) {
        let title = "유효하지 않은 세션"
        let contents = "세션이 만료되었습니다. 로그인 페이지로 이동합니다."
        popup.render(<AlertDialog title={title}
                                  contents={contents}
                                  isVisible={true}
                                  isErrorDialog={true}
                                  callbackFunction={() => {
                                    window.location.replace('/');
                                  }}
        />);

      }
      return error
    })
}


