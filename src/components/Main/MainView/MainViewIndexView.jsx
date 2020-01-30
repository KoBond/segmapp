import React from 'react';
import {Redirect} from 'react-router-dom';
export const MainViewIndexView = ()=> (
  <div className="container-fluid">
    <br/>
    <div className="row">
      <div className="col align-items-center">
        {/* Additional menu of the main page */}
      </div>
    </div>
    <div className="row mb-5">
      <div className="col-xl-3 col-lg-0">
        {/* Additional main page window */}
      </div>
      <div className="col-xl-7 col-md">
        {/* Main window of the main page */}
        <div className="row">
          <div className="col-xl-10 col-md">
           <Redirect to='/About'/>
          </div>
        </div>
      </div>
    </div>
  </div>
)