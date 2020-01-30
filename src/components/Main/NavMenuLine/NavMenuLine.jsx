import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/NavMenuLine.css';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'

class NavMenuLine extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      focused: 0,
    }
    
  }
  
  static getCurrentActiveItem(props){
    const { items } = props;
    if ( Array.isArray(items) && items.length > 0 ){
      let currentPath = props.location.pathname;
      let activeItemIndex = -1;
      for(let i=0; i<props.items.length; i++){
        let currentLink = props.items[i].link;
        if (currentPath.indexOf(currentLink) !== -1) {
          activeItemIndex = i;
          break;
        }
      }
      return activeItemIndex;
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const newFocusedItem = NavMenuLine.getCurrentActiveItem(nextProps)
    if (newFocusedItem !== prevState.focused) {
      return {
        focused: newFocusedItem
      };
    }
    // If there are no changes
    return null;
  }

  render() {
    // Saving a link to this in the map closure
    const self = this;
    const { items } = this.props;
    return (
      <div className="nav-menu-line">
        { items &&
          <ul className="nav navbar-nav d-flex">{ items.map(function(m, index) {
            if (!m.link) return null; // If the link attribute is not specified the element is not output
            let style = "";
            if (self.state.focused === index) {
              style += ' focused ';
            }
            if (m.attention === true) {
              style += ' attention ';
            }
            return (
            <li className={ 'flex-sm-fill nav-item ' + style } key={ index } >
                <Link className="nav-link" replace ={ m.replace } to={ m.link }>
                  <span className="text-nowrap">&nbsp; { m.caption } &nbsp;</span>
                  { typeof(m.badgeVal ) === 'function' ? 
                  <div className="badge badge-light" title="New messages!">
                    { m.badgeVal() }
                  </div>:null }
                  { typeof(m.picture ) === 'function' ?  m.picture() :null }
                </Link>
            </li>);
          }) }
          </ul>
        }
      </div>
    );
  }
}

export default withRouter(NavMenuLine)