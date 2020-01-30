import {backendServiceURL} from '../config/backendService'

export const UPLOAD_SOURCE_IMAGE_REQUEST = 'UPLOAD_SOURCE_IMAGE_REQUEST'
export const UPLOAD_SOURCE_IMAGE_SUCCESS = 'UPLOAD_SOURCE_IMAGE_SUCCESS'
export const UPLOAD_SOURCE_IMAGE_ERROR = 'UPLOAD_SOURCE_IMAGE_ERROR'

// Backend API
//dl_api/1.0/upload_src_img - upload source image file

export const apiCommandPOSTUploadSrcImg = backendServiceURL + 'dl_api/1.0/upload_src_img'