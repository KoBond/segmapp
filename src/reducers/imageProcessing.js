import	{
  SET_PROCESSING_STEP,
}	from	'../constants/imageProcessing';

const initialState = {
  imageProcessingStep: null,
  imageProcessingStepHint: 'Please get image first',
};

export default function imageUploader(state = initialState, action) {
  switch (action.type) {
      case SET_PROCESSING_STEP:
        if (process.env.NODE_ENV === 'development') console.log('raise action - SET_PROCESSING_STEP', action);
        return { ...state, 
          imageProcessingStep: action.processingStep,
        }
    default:
      return state;
  }
}