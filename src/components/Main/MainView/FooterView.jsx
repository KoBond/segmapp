import React from 'react';
import { systemVersion, systemName } from '../../../config/systemConfig';
import { Link } from 'react-router-dom';
export const FooterView = () => (
  <footer className="fixed-bottom">
    <div className="container-fluid">
      <div className="row pt-1 mt-1">
        <div className="col-3 mr-auto">
          <Link to="/" className="internal-page-link-calm-nu" >
            <p className="text-nowrap">
              Neural Image Segmentation Demo
            </p>
          </Link>
        </div>
        <div className="col ml-auto">
          <p className="text-right">
            <Link to="/About" className="internal-page-link-calm-nu" >
              {systemName} {systemVersion}
            </Link>
          </p>
        </div>
      </div>
    </div>
  </footer>
)