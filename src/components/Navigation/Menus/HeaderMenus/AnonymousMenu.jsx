import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';

const AnonymousMenu = () => (
  <>
    <Button color="inherit" component={NavLink} to="/register">
      Sign Up
    </Button>
    <Button color="inherit" component={NavLink} to="/login">
      Sign In
    </Button>
  </>
);

export default AnonymousMenu;
