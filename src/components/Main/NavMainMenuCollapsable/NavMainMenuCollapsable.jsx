import React from 'react';
import NavMenuLine from '../NavMenuLine/NavMenuLine';
import PropTypes from 'prop-types';

export const NavMainMenuCollapsable = ({LogoView, leftItems, rightItems, collapsed, onToggleCollapse}) =>{
  const collapsedMenuClass = collapsed ? 'collapse' : 'expand';
  return (
    <div className="container-fluid">
      <div className="row no-gutters">
        <div className="col-xl-1 col-lg-0"></div>

        <nav className="col navbar navbar-expand-md navbar-light" role="navigation">
          { LogoView &&
            <div className="navbar-brand">
              <LogoView/>
            </div>
          }

          <button className="navbar-toggler" type="button" onClick={ onToggleCollapse }>
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className= { collapsedMenuClass + ' navbar-collapse' }>
            { leftItems &&
              <div className="navbar-nav mr-auto">
                <NavMenuLine items={ leftItems }/>
              </div>
            }
            <div></div>
            { rightItems &&
              <div className="navbar-nav ml-auto">
                <NavMenuLine items={ rightItems }/>
              </div>
            }
          </div>
        </nav>
        <div className="col-0 col-xl-1"></div>
      </div>
    </div>
  )
};

NavMainMenuCollapsable.propTypes = {
  LogoView: PropTypes.func,
  leftItems: PropTypes.array,
  rightItems: PropTypes.array,
  collapsed: PropTypes.bool,
  onToggleCollapse: PropTypes.func,
};