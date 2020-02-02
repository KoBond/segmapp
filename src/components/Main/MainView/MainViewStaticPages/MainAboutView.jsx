import React from 'react';
 
export const MainAboutView = (systemVersion) => (
  <div className="container-fluid">
    <br/>
    <div className="row">
      <div className="col align-items-center">
        {/* Additional menu of the main page */}
      </div>
    </div>
    <div className="row">
      <div className="col-xl-3 col-lg-0">
        {/* Additional main page window */}
      </div>
      <div className="col-xl-7 col-md">
        {/* Main window of the main page */}
        <div className="row">
          <div className="col-xl-10 col-md">
            <h5>Demo application course project</h5>
            <div className="alert alert-info zalert-info-card" role="alert">
              <p>Neural Image Segmentation Demo</p>
              <hr/>
              <p>Segmentation pictures of camera images and jpg images</p>
              <p>for course work of &nbsp;              
                <a title="Deep Learning Scool" 
                 href="https://www.dlschool.org/"
                 className="internal-page-link-calm">
                 Deep Learning School
                </a>
              </p>              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)