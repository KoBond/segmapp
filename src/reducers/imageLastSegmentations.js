import	{
  GET_LAST_SEGMENTAQTION_REQUEST,
  GET_LAST_SEGMENTAQTION_SUCCESS,
  GET_LAST_SEGMENTAQTION_ERROR,
}	from	'../constants/imageLastSegmentation';

const initialState = {
  getLastSegmentationRequestInProcess: false,
  getLastSegmentationRequestError : false,
  getLastSegmentationRequestSuccess: false,
  getLastSegmentationRequestStatus: null,
};

export default function imageLastSegmentations(state = initialState, action) {
  switch (action.type) {

      case GET_LAST_SEGMENTAQTION_REQUEST:
          if (process.env.NODE_ENV === 'development') console.log('raise action - GET_LAST_SEGMENTAQTION_REQUEST', action);
          return { ...state, 
            getLastSegmentationRequestInProcess: true,
            getLastSegmentationRequestError : false,
            getLastSegmentationRequestSuccess: false,
            getLastSegmentationRequestStatus: 'Get last segmentation processing',
          }
    
      case GET_LAST_SEGMENTAQTION_SUCCESS:
          if (process.env.NODE_ENV === 'development') console.log('raise action - GET_LAST_SEGMENTAQTION_SUCCESS', action);
          return { ...state, 
            getLastSegmentationRequestInProcess: false,
            getLastSegmentationRequestError: false,
            getLastSegmentationRequestSuccess: true,
            getLastSegmentationRequestStatus: 'Last segmentation was received',
          }
    
      case GET_LAST_SEGMENTAQTION_ERROR:
          if (process.env.NODE_ENV === 'development') console.log('raise action - GET_LAST_SEGMENTAQTION_ERROR', action);
          return { ...state,
            getLastSegmentationRequestInProcess: false,
            getLastSegmentationRequestError: true,
            getLastSegmentationRequestSuccess: false,
            getLastSegmentationRequestStatus: `Last segmentation receiving error: 
              ${action.error.errorCode}
              ${action.error.errorMessage}`,
          }
        
    default:
      return state;
  }
}