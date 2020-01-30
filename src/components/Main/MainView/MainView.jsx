import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FooterView, LogoView, MainViewHelpView,MainAboutView,
  NavMainMenuCollapsable } from '..';
import './styles';
import { Route } from 'react-router-dom';

// Main page
import { MainViewIndexView } from './MainViewIndexView';


// Modules
// Image processing module
import { ImageProcessingView } from '../../ImageProcessing'

class DesktopMainView extends Component {
  static propTypes = {
    systemVersion: PropTypes.string.isRequired,
    systemName: PropTypes.string.isRequired,
    newAppVersionAvailable: PropTypes.bool,
  }

  static menuItems = [];
  static authMenuItems = [];

  constructor(props, context) {
    super(props, context);
    this.state = {
      collapsedMainMenu: true,
      previousLocation: '/',
    }

    this.menuItems = [
      { caption: 'About', link: '/About' },
      { caption: 'Image segmentation', link: '/ImgProcessing' },
      { caption: 'Used model', link: '/Help', attention: false },
    ];
  }

  // Save the previous route
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.location.pathname !== prevState.previousLocation) {
      window.previousLocation = prevState.previousLocation;
      return {
        previousLocation: nextProps.location.pathname
      };
    }
    // If there are no changes
    return null;
  }
  
  onToggleCollapse(){
    this.setState({
      collapsedMainMenu : !this.state.collapsedMainMenu
    });
  }

  render() {
    return (
      <div className="zApp">
        <header className="border-bottom">
          <NavMainMenuCollapsable LogoView={LogoView} leftItems={this.menuItems} rightItems={this.authMenuItems} 
          collapsed={ this.state.collapsedMainMenu }
          onToggleCollapse = { ()=>this.onToggleCollapse() }
          />
        </header>

        <main className="app-modules" >
          {/*If no module is selected output MainViewIndexView*/}
          <Route exact path="/" component={ ()=>MainViewIndexView(this.props.authorized) } />
          <Route exact path="/index.html" component={ ()=>MainViewIndexView(this.props.authorized) } />
          {/*List of functional modules*/}
          {
          <div>
            <Route exact path="/Help" component={ MainViewHelpView } />
            <Route exact path="/About" component={ ()=>MainAboutView(this.props.systemVersion) } />
            <Route path="/ImgProcessing" component={ ImageProcessingView } />
          </div>
          }
        </main>
        <FooterView/>
      </div>
    );
  }
}

export default DesktopMainView;