import React, { Component } from 'react';
import { backendServiceURL } from '../../../config/backendService';
import '../styles';
export default class ImageLastSegmentationPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      
    };
  }

  componentDidMount(){
    this.props.doGetLastSegmentatonImage();
  }
  
  ProcessedImages = () => {
    const images  = JSON.parse(window.localStorage.getItem('LastSegmentedFilesUrls'));
    if ( Array.isArray(images) ){
      return (
        <div className='img-grid-line'>
          {  
          images.map(function(m, index) {
              return (
                <div className="row mr-auto mb-2" key={ index }>
                  <div className="col">
                    <img width="300" src={ backendServiceURL + m.src_file_url.slice(1) } className="img-fluid rounded" alt=""/>
                  </div>
                  <div className="col ml-auto">
                    <img width="300" src={ backendServiceURL + m.res_file_url.slice(1) } className="img-fluid rounded" alt=""/>
                  </div>  
                </div>);
                }) 
          }
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col">
          { (this.props.imageProcessingStep===1) &&
          <button onClick = { this.goToSegmentation }
            className="btn btn-outline-info btn-sm btn-block">
              Segmentation &nbsp;
            <i className="fa  fa-flask"/>
          </button>
          }
          </div>
        </div>
          { this.ProcessedImages() }
      </div>
    );
  }
}