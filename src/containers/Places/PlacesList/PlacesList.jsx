import React from 'react';
import PropTypes from 'prop-types';
import { PLACE } from '../../../utilities/propTypes';
import ListItem from '../ListItem/ListItem';

import BASE_URL from '../../../utilities/constants';

const PlacesList = ({ places }) => {
  return (
    <div>
      {places && Array.isArray(places) && places.length > 0
        ? places.map(({
          _id, title, promoImage, reviewsNumber, ratings: { overall, food, service, interior }
        }) => (
          <ListItem
            key={_id}
            title={title}
            image={`${BASE_URL}/uploads/${promoImage}`}
          />
        ))
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
