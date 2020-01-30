import {backendServiceURL} from '../config/backendService'

export const GET_LAST_SEGMENTAQTION_REQUEST = 'GET_LAST_SEGMENTAQTION_REQUEST'
export const GET_LAST_SEGMENTAQTION_SUCCESS = 'GET_LAST_SEGMENTAQTION_SUCCESS'
export const GET_LAST_SEGMENTAQTION_ERROR = 'GET_LAST_SEGMENTAQTION_ERROR'

// Backend API
//dl_api/1.0/last_segmentations - last segmentation results

export const apiCommandGETLastSegmentation = backendServiceURL + 'dl_api/1.0/last_segmentations'