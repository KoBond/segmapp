
import { SET_PROCESSING_STEP } from '../constants/imageProcessing';

export function setImageProcessingStep( processingStep ) {
  return {
    type: SET_PROCESSING_STEP,
    processingStep: processingStep,
  }
}