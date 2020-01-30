import React, { Component } from 'react';
/**
 * Each module has three main components
 * Routes - module internal routing
 * Menu - menu
 * Filter - filters
 */
import { ImageProcessingRoutes, ImageProcessingMenu, ImageProcessingFilter }
  from '../../containers/ImageProcessing';

export default class ImageProcessingView extends Component {
  static propTypes = {
    
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-xl-1 col-lg-0 module-menu-line-color border-bottom"></div>
          <div className="col module-menu-line-color border-bottom">
            {/* Main menu of the module */}
            <ImageProcessingMenu/>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-3 col-lg-0">
            {/* Module filter window (on the left) */}
            <ImageProcessingFilter/>
          </div>
          <div className="col-xl-7 col-md">
            {/* Main window of the module */}
            <ImageProcessingRoutes/>
          </div>
        </div>
      </div>
    );
  }
}