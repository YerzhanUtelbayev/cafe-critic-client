import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import PropTypes from 'prop-types';

const RatingStars = ({
  title, name, value, precision,
}) => (
  <Box component="fieldset" borderColor="transparent">
    <Typography component="legend">{title}</Typography>
    <Rating name={name} value={value} precision={precision || 1} readOnly />
  </Box>
);

RatingStars.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  precision: PropTypes.number,
  title: PropTypes.string,
};

RatingStars.defaultProps = {
  title: null,
  precision: 1,
};

export default RatingStars;
