import	{
  UPLOAD_SOURCE_IMAGE_REQUEST,
  UPLOAD_SOURCE_IMAGE_SUCCESS,
  UPLOAD_SOURCE_IMAGE_ERROR,
}	from	'../constants/imageUploader';

const initialState = {
  uploadSourceFileRequestInProcess: false,
  uploadSourceFileRequestError : false,
  uploadSourceFileRequestSuccess: false,
  uploadSourceFileRequestStatus: null, 
  uploadSourceFileName: null,
  serverSourceFileNameURL: null,
};

export default function imageUploader(state = initialState, action) {
  switch (action.type) {

      case UPLOAD_SOURCE_IMAGE_REQUEST:
        if (process.env.NODE_ENV === 'development') console.log('raise action - UPLOAD_SOURCE_IMAGE_REQUEST', action);
        return { ...state, 
          uploadSourceFileRequestInProcess: true,
          uploadSourceFileRequestError : false,
          uploadSourceFileRequestSuccess: false,
          uploadSourceFileRequestStatus: 'The source image is being uploaded to the server',
          uploadSourceFileName: action.filename,
        }

      case UPLOAD_SOURCE_IMAGE_SUCCESS:
          if (process.env.NODE_ENV === 'development') console.log('raise action - UPLOAD_SOURCE_IMAGE_SUCCESS', action);
          return { ...state, 
            uploadSourceFileRequestInProcess: false,
            uploadSourceFileRequestError: false,
            uploadSourceFileRequestSuccess: true,
            uploadSourceFileRequestStatus: 'The source image has been uploaded to the server',
            serverSourceFileNameURL: action.fileURL,
          }

      case UPLOAD_SOURCE_IMAGE_ERROR:
          if (process.env.NODE_ENV === 'development') console.log('raise action - UPLOAD_SOURCE_IMAGE_ERROR', action);
          return { ...state,
            uploadSourceFileRequestInProcess: false,
            uploadSourceFileRequestError: true,
            uploadSourceFileRequestSuccess: false,
            uploadSourceFileRequestStatus: `Error loading the source image to the server: 
              ${action.error.errorCode}
              ${action.error.errorMessage}`,
            childUserId: null,
          }
  
    default:
      return state;
  }
}