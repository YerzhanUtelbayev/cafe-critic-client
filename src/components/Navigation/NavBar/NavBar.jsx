import React from 'react';
import {
  AppBar, Container, Toolbar, Typography,
} from '@material-ui/core';
import AnonymousMenu from '../Menus/HeaderMenus/AnonymousMenu';

const NavBar = () => (
  <AppBar position="static">
    <Container>
      <Toolbar>
        <Typography variant="h6">Cafe Critic</Typography>
        <AnonymousMenu />
      </Toolbar>
    </Container>
  </AppBar>
);

export default NavBar;
