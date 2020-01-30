import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './config/configureStore';
import Root from './containers/Root';
import * as serviceWorker from './extensions/serviceWorker/serviceWorker';

const store = configureStore();
if (process.env.NODE_ENV === 'development') store.subscribe(()=>console.log('The container changed', store.getState()));
    
ReactDOM.render(
    <Root store={ store }/>,
    document.getElementById('root'));  

serviceWorker.unregister();