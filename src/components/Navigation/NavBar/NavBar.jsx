import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar, Container, Toolbar, Typography, Link,
} from '@material-ui/core';
import AnonymousMenu from '../Menus/HeaderMenus/AnonymousMenu';

const NavBar = () => (
  <AppBar position="static">
    <Container>
      <Toolbar>
        <Link color="inherit" underline="none" component={RouterLink} to="/">
          <Typography variant="h6">Cafe Critic</Typography>
        </Link>
        <AnonymousMenu />
      </Toolbar>
    </Container>
  </AppBar>
);

export default NavBar;
