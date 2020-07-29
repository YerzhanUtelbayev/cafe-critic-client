import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

import {
  fetchPlaceByIdRequest,
  resetCurrentPlace,
} from '../../store/actions/places';
import { PLACE } from '../../utilities/propTypes';
import BASE_URL from '../../utilities/constants';
import CoffeeCupImage from '../../assets/images/img-coffee-cup.svg';

const useStyles = makeStyles(() => ({
  promoImage: {
    width: '100%',
    height: 'auto',
  },
}));

const PlaceFullInfo = ({ fetchPlaceById, currentPlace, resetPlace }) => {
  const { id } = useParams();
  const classes = useStyles();
  const { title, description, promoImage } = currentPlace;

  useEffect(() => {
    if (id) {
      fetchPlaceById(id);
    }
    return resetPlace;
  }, [fetchPlaceById, id, resetPlace]);

  return (
    <Box py={3}>
      <Grid container spacing={3}>
        <Grid item md={8}>
          <Typography variant="h4" component="h1">
            {title || ''}
          </Typography>
          <Typography>{description || ''}</Typography>
        </Grid>
        <Grid item md={4}>
          <Box component="div">
            {currentPlace && (
              <img
                src={
                  promoImage
                    ? `${BASE_URL}/uploads/${promoImage}`
                    : CoffeeCupImage
                }
                alt={title}
                className={classes.promoImage}
              />
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

PlaceFullInfo.propTypes = {
  fetchPlaceById: PropTypes.func.isRequired,
  resetPlace: PropTypes.func.isRequired,
  currentPlace: PLACE,
};

PlaceFullInfo.defaultProps = {
  currentPlace: {},
};

const mapStateToProps = ({ places }) => ({
  currentPlace: places.currentPlace,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPlaceById: (placeId) => dispatch(fetchPlaceByIdRequest(placeId)),
  resetPlace: () => dispatch(resetCurrentPlace()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaceFullInfo);
