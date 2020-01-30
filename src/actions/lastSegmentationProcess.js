import { apiCommandGETLastSegmentation,
  GET_LAST_SEGMENTAQTION_REQUEST,
  GET_LAST_SEGMENTAQTION_SUCCESS,
  GET_LAST_SEGMENTAQTION_ERROR,
} from '../constants/imageLastSegmentation';
import { validationJSON } from '../lib/utils'

//Segmentaton
export function requestLastSegmentaton() {
  return {
    type: GET_LAST_SEGMENTAQTION_REQUEST,
  }
}

export function lastSegmentatonRequestSuccess(resFilesUrls) {
  window.localStorage.setItem('LastSegmentedFilesUrls', JSON.stringify(resFilesUrls));
  return {
    type: GET_LAST_SEGMENTAQTION_SUCCESS,
  }
}

export function lastSegmentatonRequestError(errorCode, errorMessage) {
  return {
    type: GET_LAST_SEGMENTAQTION_ERROR,
    error: {errorCode, errorMessage},
  }
}

export function doGetLastSegmentatonImage() {
  return function(dispatch) {
    dispatch(requestLastSegmentaton());
    let httpStatusCode = null;
    let apiErrorCode = null;
    let apiErrorMessage = null;
    return fetch(apiCommandGETLastSegmentation, {
      // cors - The API service can be on any server, same-origin is The same server
      // no-cors - No handle headers
      mode: 'cors',
      method: 'GET',
      headers: {'Accept': 'application/json'},
    })
      .then((response)=>{
        httpStatusCode = response.status;
        return response;
      })
      .then(validationJSON) // Open promise
      .then((data)=> {
        // data contains the error decryption in the error object
        if (httpStatusCode === 200) {
          dispatch(lastSegmentatonRequestSuccess(data.segmented_files));
        }
        else {
          // data contains the error decryption in the error object
          apiErrorCode = data.code;
          apiErrorMessage = data.message;
          const error = new Error()
          throw error
        }
      })
      .catch((error) => {
        if (process.env.NODE_ENV === 'development') console.log('doSegmentatonImage() - Error: ', error);
        dispatch(
          lastSegmentatonRequestError(
            apiErrorCode || httpStatusCode,
            apiErrorMessage || error.message
          ));
      })
  }
}