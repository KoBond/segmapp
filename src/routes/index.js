import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Containers
import { App } from '../containers';

// Main visual modules
import { NotFoundView } from '../components';

export default(
  <div>
    <Switch>
      <Route exact path="/index.html" component={ App }/>
      <Route exact path="/" component={ App }/>
      <Route path="/About" component={ App }/>
      <Route path="/ImgProcessing" component={ App } />
      <Route path="/Help" component={ App } />
      <Route component={ NotFoundView }/>
    </Switch>
  </div>
)