import React, { Component } from 'react';
import { LoadingView } from '../../Main';
import { Redirect } from 'react-router';

export default class ImageSegmentationPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      segmentationDone: false
    };
    this.runSegmentation = this.runSegmentation.bind(this);
  }

  runSegmentation() {
    this.props.doSegmentatonImage( this.props.sourceFileName )
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.makeSegmentationRequestSuccess && (!prevState.segmentationDone)) {
      return {
        segmentationDone: true,
      };
    }
    return null;
  }

  componentDidMount(){
    if (!this.props.makeSegmentationRequestSuccess&&!this.props.makeSegmentationRequestInProcess) 
      this.props.doSegmentatonImage( this.props.sourceFileName )
  }

  render() {
    const { makeSegmentationRequestInProcess, resultSegmentationFileUrl, 
      makeSegmentationRequestStatus, makeSegmentationRequestError, sourceFileUrl, makeSegmentationRequestSuccess}= this.props;
    const { segmentationDone }= this.state;

    if (!this.props.sourceFileUrl) 
      return (<Redirect to='/ImgProcessing'/>)
    else
    return (
      <div>
        {(makeSegmentationRequestInProcess)&&
        <div className="row mb-2">
          <div className="col">
              <LoadingView text='Segmentation in process...'/>
          </div>
        </div>
        }

        {(!segmentationDone)&&(!makeSegmentationRequestInProcess)&&(!makeSegmentationRequestError)&&
        <div className="row mb-2">
          <div className="col">
            <button onClick = { this.runSegmentation } className="btn btn-outline-info btn-sm btn-block">
                Segmentation &nbsp;
              <i className="fa  fa-flask"/>
            </button>
          </div>
        </div>
        }

        {(makeSegmentationRequestError)&&
          <div className="row mb-2">
            <div className="col">
              <div className="alert alert-info zalert-info-card" role="alert">
                <p>File uploading error</p>
                <hr/>
                <p>{ makeSegmentationRequestStatus }</p>
              </div>
            </div>
          </div>
        }

        <div className="row mt-2">
          <div className="col">
            { makeSegmentationRequestSuccess &&
              <img src={ sourceFileUrl } width="300" alt="" className="img-fluid rounded"/>
            }
          </div>
          <div className="col">
            <img src={ resultSegmentationFileUrl } width="300" alt="" className="img-fluid rounded"/>
          </div>
        </div>
      </div>
    );
  }
}