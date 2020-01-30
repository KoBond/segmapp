import React from 'react';
import NavMenuLine from '../NavMenuLine/NavMenuLine';
import PropTypes from 'prop-types';

export const NavMainMenu = ({LogoView, leftItems, rightItems}) =>{
  return (
    <div className="container-fluid">
      <div className="row no-gutters">
        <div className="col-xl-1 col-lg-0"></div>

        <nav className="col navbar navbar-expand-sm" role="navigation">
          { LogoView &&
            <div className="navbar-brand">
              <LogoView/>
            </div>
          }
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
        </nav>
        <div className="col-0 col-xl-1"></div>
      </div>
    </div>
  )
};

NavMainMenu.propTypes = {
  LogoView: PropTypes.func,
  leftItems: PropTypes.array,
  rightItems: PropTypes.array,
};