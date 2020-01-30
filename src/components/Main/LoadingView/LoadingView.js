import React from 'react';
import './styles';
import PropTypes from 'prop-types';
export const LoadingView = ( { text } ) => (
  <div className="progress progress-processing">
    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style= { { width: '100%' } }>
      { text }
    </div>
  </div>
)

LoadingView.propTypes = {
  text: PropTypes.string,
}