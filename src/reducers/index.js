import { combineReducers } from 'redux';
import imageUploader from './imageUploader';
import imageSegmentations from './imageSegmentations';
import imageProcessing from './imageProcessing';
import imageLastSegmentations from './imageLastSegmentations';

export default combineReducers({
  imageUploader,
  imageSegmentations,
  imageProcessing,
  imageLastSegmentations,
})