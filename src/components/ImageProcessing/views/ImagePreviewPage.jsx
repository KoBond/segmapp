import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

export default class ImagePreviewPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      sourceFileURL: props.sourceFileUrl,
      goToSegmentation: false,
    };

    this.goToSegmentation = this.goToSegmentation.bind(this);
  }

  goToSegmentation() {
    this.props.segmentatonReset()
    this.setState({
      goToSegmentation: true
    })
  }
 
  render() {
    const { sourceFileUrl }= this.props;
    if (!this.props.sourceFileUrl) 
      return (<Redirect to='/ImgProcessing'/>)
    else
    return (
      <div>
        { (this.state.goToSegmentation) ?
          <Redirect to='/ImgProcessing/Segmentation'/> : 
          true
        }

        <div className="row">
          <div className="col">
          { (this.props.imageProcessingStep===1) &&
          <button onClick = { this.goToSegmentation }
            className="btn btn-outline-info btn-sm btn-block">
              Segmentation &nbsp;
            <i className="fa fa-flask"/>
          </button>
          }
          </div>
        </div>

        <div className="row mt-2">
          <div className="col">
            <img src={ sourceFileUrl } className="img-fluid rounded" alt=""/>
          </div>
        </div>
        
      </div>
    );
  }
}