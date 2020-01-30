import React, { Component } from 'react';
import Camera, { IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import { createGuid } from '../../../lib/utils';
import {Redirect} from 'react-router-dom';
import { LoadingView } from '../../Main';

export default class ImageUploaderPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      file: null,
      fsFileName: null,
      camError: false,
      uploadSourceFileRequestSuccess: false,
      uploadSourceFileRequestError: false,
      uploadSourceFileRequestStatus: null,
      uploadSourceFileRequestInProcess: false,
      goToPreview: false,
    };

    this.handleFileChange = this.handleFileChange.bind(this);
    this.sendFile = this.sendFile.bind(this);
    this.handleTakePhoto = this.handleTakePhoto.bind(this);
    this.handleCameraError = this.handleCameraError.bind(this);
  }

  handleFileChange(event) {
    this.setState({
      file:event.target.files[0],
      fsFileName: event.target.files[0].name
    })
  }

  sendFile() {
    this.props.setImageProcessingStep(0);
    this.props.doUploadImage( null, this.state.file, 'file' )
  }
 
  handleTakePhoto (dataUri) {
    const fileName = createGuid()+'.jpg'
    this.props.setImageProcessingStep(0);
    this.props.doUploadImage( fileName, dataUri, 'camera' )
  }

  handleCameraError (error) {
    this.setState({
      camError: true
    })
  }
  
  static getDerivedStateFromProps(nextProps, prevState) {
    if (!nextProps.imageProcessingStep)
    if (nextProps.uploadSourceFileRequestSuccess && (!prevState.uploadSourceFileRequestSuccess)) {
      nextProps.setImageProcessingStep(1);
      return {
        uploadSourceFileRequestSuccess: true,
        goToPreview: true,
      };
    }
    if (nextProps.uploadSourceFileRequestError && (!prevState.uploadSourceFileRequestError)) {
      return {
        uploadSourceFileRequestError: nextProps.uploadSourceFileRequestError,
        uploadSourceFileRequestStatus: nextProps.uploadSourceFileRequestStatus,
        uploadSourceFileRequestInProcess: nextProps.uploadSourceFileRequestInProcess,
      };
    }
    if (nextProps.uploadSourceFileRequestInProcess && (!prevState.uploadSourceFileRequestInProcess)) {
      return {
        uploadSourceFileRequestError: nextProps.uploadSourceFileRequestError,
        uploadSourceFileRequestInProcess: nextProps.uploadSourceFileRequestInProcess,
      };
    }    
    return null;
  }

  render() {
    const { goToPreview, camError, uploadSourceFileRequestError, 
      uploadSourceFileRequestStatus, uploadSourceFileRequestInProcess }= this.state;
   
    if ( goToPreview )
      return (<Redirect to='/ImgProcessing/Preview'/>)
    else
    return (
      <div>
          {(uploadSourceFileRequestInProcess)&&
          <div className="row mb-2">
            <div className="col">
                <LoadingView text='Uploading image'/>
            </div>
          </div>
          }

          {(uploadSourceFileRequestError)&&
          <div className="row mb-2">
            <div className="col">
              <div className="alert alert-info zalert-info-card" role="alert">
                <p>File uploading error</p>
                <hr/>
                <p>{ uploadSourceFileRequestStatus }</p>
              </div>
            </div>
          </div>
          }
          {(camError)&&
          <div className="row mb-2">
            <div className="col">
              <div className="alert alert-info zalert-info-card" role="alert">
                <p>Camera error</p>
                <hr/>
                <p>Camera is not available, please use file upload form</p>
              </div>
            </div>
          </div>
          }

        <div className="row mb-2">
          <div className="col">
            <div className="file-uploader">
              <div className="input-group">
                <div className="custom-file">
                  <input type="file"
                    className="custom-file-input"
                    onChange={this.handleFileChange}
                  />
                  <label className="custom-file-label">{this.state.fsFileName}</label>
                </div>
                {(this.state.fsFileName) &&
                <div className="input-group-append">
                  <button className="btn btn-outline-success" type="button" onClick={this.sendFile}>Upload</button>
                </div>
                }
              </div>
            </div>
          </div>
        </div>

        { (!camError)&&
        <div className="row">
          <div className="col">
            <Camera
              onTakePhoto = { goToPreview || this.handleTakePhoto }
              onCameraError = { goToPreview || this.handleCameraError }
              isMaxResolution = {true}
              idealResolution = {{width: 800, height: 600}}
              imageType = {IMAGE_TYPES.JPG}
              isSilentMode = {true}
            />
          </div>
        </div>
        }        
      </div>
    );
  }
}