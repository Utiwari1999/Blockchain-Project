import Axios from 'axios';
import * as Constants  from './constants';
const SERVER_END_POINT = 'https://'+Constants.API_BASE_URL ;

export const  GetRequestApi = async(url,timeoutType) => {
    let endPoint = SERVER_END_POINT + url ;
    let timeout = getTimeout(timeoutType) ;
    let response ={
        data:{},
        err:null
    }
    try {
       let resp = await Axios.get(endPoint, {headers: getHeaders(), timeout:timeout})
        if(resp.data && resp.data.data){
            if(resp.data.data.error){
                response.err= resp.data.data.error;
            }
            else{
                response.data= resp.data.data;
            }
        }
       return resp.data;
    }catch(error) { // error.message error.code will be give error type
        let resp = handleError(error);
        // throw error ;
        response.err=resp;
        return response
    }
};

export const PostRequestApi = async(url,data,timeoutType, dispatch) => {
    let endPoint = SERVER_END_POINT + url ;
    let timeout = getTimeout(timeoutType) ;
    let response ={
        data:{},
        err:null
    }
    try {
        let resp = await Axios.post(endPoint, data, {headers: getHeaders(),timeout:timeout});
        if(resp.data && resp.data.data){
            if(resp.data.data.error){
                response.err= resp.data.data.error;
            }
            else{
                response.data= resp.data.data;
            }
        }
       return resp.data;
    }catch(error) {
        let resp = handleError(error);
        // throw error ;
        response.err=resp;
        return response
    }
};

const getTimeout =(type) =>{
    switch(type){
        case Constants.API_TIMEOUT_TYPE.SLOW_TIMEOUT:
            return Constants.API_TIMEOUT.SLOW_TIMEOUT;
        case Constants.API_TIMEOUT_TYPE.QUICK_TIMEOUT:
            return Constants.API_TIMEOUT.QUICK_TIMEOUT;
        default:
            return Constants.API_TIMEOUT.AVG_TIMEOUT ;
    }
}

const getHeaders =() =>{
   let headers =
       { 
        } ;
   return headers ;

}
const handleError = (error) =>{
    let response = {errorType : "", errorMessage : ""} ;
    if(error.response){
        let status = error.response.status ;

        switch(status){
            case Constants.API_RESPONSE_STATUS.BAD_REQUEST :
              response = {
                  errorType: Constants.API_RESPONSE_MESSAGE.BAD_REQUEST,
                  errorMessage: error.response.data.error
              }  ;
              break ;
            case Constants.API_RESPONSE_STATUS.INVALID_CREDENTIALS:
                response = {
                    errorType: Constants.API_RESPONSE_MESSAGE.INVALID_CREDENTIALS,
                    errorMessage: error.response.data.error
                };
                break ;
            case Constants.API_RESPONSE_STATUS.NOT_FOUND:
                response = {
                    errorType: Constants.API_RESPONSE_MESSAGE.NOT_FOUND,
                    errorMessage: error.response.data.error
                };
                break;
            default :
                response ={
                    errorType: Constants.API_RESPONSE_MESSAGE.UNKNOWN_ERROR,
                    errorMessage: error.response.data.error
                }
        }

    }else{
        response ={
            errorType: Constants.API_RESPONSE_MESSAGE.UNKNOWN_ERROR,
            errorMessage: Constants.API_RESPONSE_MESSAGE.INTERNAL_ERROR

        }
    }
    return response
}