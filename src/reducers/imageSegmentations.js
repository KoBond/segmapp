import	{
  MAKE_SEGMENTAQTION_REQUEST,
  MAKE_SEGMENTAQTION_SUCCESS,
  MAKE_SEGMENTAQTION_ERROR,
  MAKE_SEGMENTAQTION_RESET,
}	from	'../constants/imageSegmentation';

const initialState = {
  makeSegmentationRequestInProcess: false,
  makeSegmentationRequestError : false,
  makeSegmentationRequestSuccess: false,
  makeSegmentationRequestStatus: null,
  
  sourceFileName: null,
  resultSegmentationFileUrl:null,
  resultSegmentationFileName:null,
};

export default function imageSegmentations(state = initialState, action) {
  switch (action.type) {

      case MAKE_SEGMENTAQTION_REQUEST:
          if (process.env.NODE_ENV === 'development') console.log('raise action - MAKE_SEGMENTAQTION_REQUEST', action);
          return { ...state, 
            makeSegmentationRequestInProcess: true,
            makeSegmentationRequestError : false,
            makeSegmentationRequestSuccess: false,
            makeSegmentationRequestStatus: 'Segmentation processing',
            sourceFileName: action.sourceFileName,
          }
    
      case MAKE_SEGMENTAQTION_SUCCESS:
          if (process.env.NODE_ENV === 'development') console.log('raise action - MAKE_SEGMENTAQTION_SUCCESS', action);
          return { ...state, 
            makeSegmentationRequestInProcess: false,
            makeSegmentationRequestError: false,
            makeSegmentationRequestSuccess: true,
            makeSegmentationRequestStatus: 'Segmentation done',
            resultSegmentationFileUrl:action.resultSegmentationFileUrl,
            resultSegmentationFileName:action.resultSegmentationFileName,
          }
    
      case MAKE_SEGMENTAQTION_ERROR:
          if (process.env.NODE_ENV === 'development') console.log('raise action - MAKE_SEGMENTAQTION_ERROR', action);
          return { ...state,
            makeSegmentationRequestInProcess: false,
            makeSegmentationRequestError: true,
            makeSegmentationRequestSuccess: false,
            makeSegmentationRequestStatus: `Segmentation error: 
              ${action.error.errorCode}
              ${action.error.errorMessage}`,
          }
      case MAKE_SEGMENTAQTION_RESET:
        if (process.env.NODE_ENV === 'development') console.log('raise action - MAKE_SEGMENTAQTION_RESET', action);
        return { ...state,
          makeSegmentationRequestInProcess: false,
          makeSegmentationRequestError : false,
          makeSegmentationRequestSuccess: false,
          makeSegmentationRequestStatus: null,

          resultSegmentationFileUrl:null,
          resultSegmentationFileName:null,
        }
        
    default:
      return state;
  }
}