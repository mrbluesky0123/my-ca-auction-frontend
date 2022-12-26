import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;
export default function callApi({ url,
                                  method = 'get',
                                  params,
                                  data,
                                  responseType = 'json',
                                  isLoading = true,
                                  goErrorPageWhenFailed = false
                                }, config) {
  let api_url = '';
  if(url.startsWith('http')) {
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
      'Content-Type': 'application/json;charset=utf-8',
      'Access-Control-Allow-Origin': '*',
    },
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      if(error.response === undefined) {
        console.log("Failed to connect server.");
      }
      if(error.response.status === 500) {
        console.log("Internal server error");
      }
      return {
        isSuccess: false,
        data: undefined,
        responseCode: error.response.responseCode,
        responseMessage: error.response.responseMessage
      }
    })
}
