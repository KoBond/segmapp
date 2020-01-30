import { Provider } from 'react-redux'
import React, { Component } from 'react';
import routes from '../routes';
import { BrowserRouter as Router} from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Root extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  };
 
  render() {
    return (
      <div>
        <Provider store={this.props.store}>
          <div>
            <Router>
              { routes }
            </Router>
          </div>
        </Provider>
      </div>
    );
  }
}