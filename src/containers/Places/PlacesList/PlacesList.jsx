import React from 'react';
import { useHistory } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

import { PLACE } from '../../../utilities/propTypes';
import BASE_URL from '../../../utilities/constants';
import ListItem from '../ListItem/ListItem';
import RatingStars from '../../../components/UI/RatingStars/RatingStars';

const PlacesList = ({ places }) => {
  const history = useHistory();

  const handleProceedToPlaceInfo = (placeId) => {
    history.push(`/places/${placeId}`);
  };

  return (
    <div>
      {places && Array.isArray(places) && places.length > 0
        ? places.map(
          ({
            _id,
            title,
            thumbnail,
            description,
            reviewsNumber,
            ratings,
          }) => (
            <ListItem
              key={_id}
              title={title}
              image={`${BASE_URL}/uploads/${thumbnail}`}
              handleProceed={() => handleProceedToPlaceInfo(_id)}
            >
              <Typography>{description}</Typography>
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
              ) : null}
            </ListItem>
          ),
        )
        : null}
    </div>
  );
};

PlacesList.propTypes = {
  places: PropTypes.arrayOf(PLACE),
};

PlacesList.defaultProps = {
  places: [],
};

export default PlacesList;
