import React from 'react';
import { Link } from 'react-router-dom';
import './styles';
import logo from './img/logo.png';

export const LogoView = () => (
  <Link to="/">
      <img src={ logo } className="pull-left z-app-logo" alt="dlDemo"/>
  </Link>
)