import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Box } from '@material-ui/core';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import PropTypes from 'prop-types';

import { PLACE } from '../../../utilities/propTypes';
import BASE_URL from '../../../utilities/constants';
import ListItem from '../ListItem/ListItem';
import RatingStars from '../../../components/UI/RatingStars/RatingStars';

const useStyles = makeStyles(() => ({
  textBox: {
    maxHeight: '4.5rem',
    overflow: 'hidden',
  },
  // TODO: Add text multi line truncation (clamping)
}));

const PlacesList = ({ places }) => {
  const history = useHistory();
  const classes = useStyles();

  const handleProceedToPlaceInfo = (placeId) => {
    history.push(`/places/${placeId}`);
  };

  return (
    <Grid container spacing={2}>
      {places && Array.isArray(places) && places.length > 0
        ? places.map(
          ({
            _id,
            title,
            thumbnail,
            description,
            reviewsNumber,
            imagesNumber,
            ratings,
          }) => (
            <Grid item md={4} sm={6} xs={12} key={_id}>
              <ListItem
                title={title}
                image={`${BASE_URL}/uploads/${thumbnail}`}
                handleProceed={() => handleProceedToPlaceInfo(_id)}
              >
                <Box component="div" className={classes.textBox}>
                  <Typography>{description}</Typography>
                </Box>
                {ratings ? (
                  <>
                    <RatingStars
                      name="overallRating"
                      value={ratings.overall}
                      precision={0.1}
                    />
                    <Typography>
                      {`(${ratings.overall}, `}
                      {reviewsNumber > 1
                        ? `${reviewsNumber} reviews`
                        : `${reviewsNumber} review)`}
                    </Typography>
                  </>
                ) : (
                  <>
                    <RatingStars name="overallRating" disabled />
                    <Typography>(Not rated yet)</Typography>
                  </>
                )}

                <Box display="flex" alignItems="center" mt={1}>
                  <PhotoCameraIcon />
                  <Typography display="inline">{` ${imagesNumber} photos`}</Typography>
                </Box>
              </ListItem>
            </Grid>
          ),
        )
        : null}
    </Grid>
  );
};

PlacesList.propTypes = {
  places: PropTypes.arrayOf(PLACE),
};

PlacesList.defaultProps = {
  places: [],
};

export default PlacesList;
