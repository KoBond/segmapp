import { apiCommandGETMakeSegmentation,
  MAKE_SEGMENTAQTION_REQUEST,
  MAKE_SEGMENTAQTION_SUCCESS,
  MAKE_SEGMENTAQTION_ERROR,
  MAKE_SEGMENTAQTION_RESET
} from '../constants/imageSegmentation';
import { validationJSON } from '../lib/utils'

import { backendServiceURL } from '../config/backendService';

//Segmentaton
export function requestSegmentaton( filename ) {
  return {
    type: MAKE_SEGMENTAQTION_REQUEST,
    sourceFileName: filename,
  }
}

export function segmentatonRequestSuccess(resFilename, resFileURL) {
  return {
    type: MAKE_SEGMENTAQTION_SUCCESS,
    resultSegmentationFileName: resFilename,
    resultSegmentationFileUrl: resFileURL,
  }
}

export function segmentatonRequestError(errorCode, errorMessage) {
  return {
    type: MAKE_SEGMENTAQTION_ERROR,
    error: {errorCode, errorMessage},
  }
}
 
export function segmentatonReset() {
  return {
    type: MAKE_SEGMENTAQTION_RESET,
  }
}

export function doSegmentatonImage(filename) {
  return function(dispatch) {
    dispatch(requestSegmentaton(filename));
    let httpStatusCode = null;
    let apiErrorCode = null;
    let apiErrorMessage = null;
    return fetch(apiCommandGETMakeSegmentation + '/' + filename, {
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
        if (httpStatusCode === 200) {
          dispatch(segmentatonRequestSuccess(data.res_file_name, backendServiceURL + data.res_file_url.slice(1)));
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
          segmentatonRequestError(
            apiErrorCode || httpStatusCode,
            apiErrorMessage || error.message
          ));
      })
  }
}