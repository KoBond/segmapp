import React from 'react';
import { Route, Switch } from 'react-router-dom';
 
// The module settings
import ImageProcessingModules from '../../routes/ImageProcessing/ImageProcessingIndex';
// Module menu bar
import { MenuLine as Menu} from '../../components';

export const ImageProcessingMenu = () => (
  <Menu items={ ImageProcessingModules } />
)

export const ImageProcessingRoutes = () => (
  // <Switch> - because non-existing routes can be called inside Receivables
  <Switch>
    {ImageProcessingModules.map(
      (props, i)=>(
        <Route key={ i } { ...props }/>
      )
    )}
  </Switch>
)

export const ImageProcessingFilter = () => (
    ImageProcessingModules.map(
    (props, i)=>(
      <Route key={ i } { ...props } component = { props.filterСomponent }/>
    )
  )
)