import React from 'react';
import { Redirect } from 'react-router-dom';
export const RedirectTo = (newPath)=> <Redirect to={ newPath }/>;