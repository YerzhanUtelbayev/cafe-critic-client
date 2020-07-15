import React from 'react';
import { CssBaseline, Container } from '@material-ui/core';
import PropTypes from 'prop-types';

import NavBar from '../Navigation/NavBar/NavBar';

const Layout = ({ children }) => (
  <>
    <CssBaseline />
    <NavBar />
    <main>
      <Container>{children}</Container>
    </main>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
