import React from 'react'
import { Link } from 'react-router-dom'
import { LogoView, FooterView } from '..';

export const NotFoundView = ({ location }) => (
  <div className="zApp">
    <div className="container app-modules">
      <div className="row">
        <div className="col-lg-3 col-md-0">
          <LogoView/>
        </div>
        <div className="col-lg-6 col-md mt-2">
          <h4>Page not found</h4>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="d-md-none">
            <hr/>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-3 col-md-0"></div>
        <div className="col-lg-6 col-md-0 mb-2">
          <p>{ location.pathname }</p>
          <hr/>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-3 col-md-0"></div>
        <div className="col-lg-6 col-md-0 mb-2">
          <div className="row no-gutters">
            <div className="col-md-6 col-sm ml-auto">
              <Link to={ '/' } className="internal-page-link-calm-nu" title="Main page">
                <button type="submit" className="btn btn-outline-info btn-sm btn-block">
                  OK
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
 
    </div>
    <FooterView/>
  </div>
)