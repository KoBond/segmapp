import {backendServiceURL} from '../config/backendService'

export const MAKE_SEGMENTAQTION_REQUEST = 'MAKE_SEGMENTAQTION_REQUEST'
export const MAKE_SEGMENTAQTION_SUCCESS = 'MAKE_SEGMENTAQTION_SUCCESS'
export const MAKE_SEGMENTAQTION_ERROR = 'MAKE_SEGMENTAQTION_ERROR'
export const MAKE_SEGMENTAQTION_RESET = 'MAKE_SEGMENTAQTION_RESET'

// Backend API
//dl_api/1.0/segmentation/<filename> - start segmentation process

export const apiCommandGETMakeSegmentation = backendServiceURL + 'dl_api/1.0/segmentation'