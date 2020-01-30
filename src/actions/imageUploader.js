
import { apiCommandPOSTUploadSrcImg,
  UPLOAD_SOURCE_IMAGE_REQUEST,
  UPLOAD_SOURCE_IMAGE_SUCCESS,
  UPLOAD_SOURCE_IMAGE_ERROR,
} from '../constants/imageUploader';

import { validationJSON, dataURItoFile } from '../lib/utils'
import { backendServiceURL } from '../config/backendService';

export function requestUploadImage( filename ) {
  return {
    type: UPLOAD_SOURCE_IMAGE_REQUEST,
    filename: filename,
  }
}

export function uploadImageRequestSuccess(filename) {
  return {
    type: UPLOAD_SOURCE_IMAGE_SUCCESS,
    fileURL: filename,
  }
}

export function uploadImageRequestError(errorCode, errorMessage) {
  return {
    type: UPLOAD_SOURCE_IMAGE_ERROR,
    error: {errorCode, errorMessage},
  }
}

export function doUploadImage(filename, dataUri, src) {
    let data = new FormData();
    data.append('file', src==='file'?dataUri:dataURItoFile(dataUri, filename));
    filename = src==='file'?dataUri.name:filename

    return function(dispatch) {
    dispatch(requestUploadImage(filename));
    let httpStatusCode = null;
    let apiErrorCode = null;
    let apiErrorMessage = null;
 
    return fetch(apiCommandPOSTUploadSrcImg, {
      // cors - The API service can be on any server, same-origin is The same server
      // no-cors - No handle headers
      mode: 'cors',
      method: 'POST',
      headers: {'Accept': 'application/json'},
      body: data
    })
      .then((response)=>{
        httpStatusCode = response.status;
        return response;
      })
      .then(validationJSON) // Open promise
      .then((data)=> {
        if (httpStatusCode === 200) {
          dispatch(uploadImageRequestSuccess(backendServiceURL + data.file_name.slice(1)));
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
        if (process.env.NODE_ENV === 'development') console.log('doUploadImage() - Error: ', error);
        dispatch(
          uploadImageRequestError(
            apiErrorCode || httpStatusCode,
            apiErrorMessage || error.message
          ));
      })
  }
}