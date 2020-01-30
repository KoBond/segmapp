import React from 'react';
import NavMenuLine from '../NavMenuLine/NavMenuLine';
import PropTypes from 'prop-types';
export const NavModuleMenu = ({ items, RightSide }) => {
  return (
    <div className="container-fluid">
      <div className="row no-gutters module-menu-line-color">
        <div className="col-auto mr-auto navbar-expand-sm">
          <NavMenuLine items={ items }/>
        </div>
        { RightSide &&
          <div className="col ml-auto">
            <RightSide/>
          </div>
        }
      </div>
    </div>
  )
}

NavModuleMenu.propTypes = {
  items: PropTypes.array,
  RightSide: PropTypes.func,
}