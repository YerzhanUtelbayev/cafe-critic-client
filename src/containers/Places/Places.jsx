import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchPlacesRequest } from '../../store/actions/places';

const Places = ({ places, fetchPlaces }) => {
  useEffect(() => {
    fetchPlaces();
  }, [fetchPlaces]);

  return <div>Places will be listed here</div>;
};

Places.propTypes = {
  fetchPlaces: PropTypes.func.isRequired,
  places: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      owner: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      promoImage: PropTypes.string,
      reviewsNumber: PropTypes.number,
      ratings: PropTypes.shape({
        overall: PropTypes.number,
        food: PropTypes.number,
        service: PropTypes.number,
        interior: PropTypes.number,
      }),
    }),
  ),
};

Places.defaultProps = {
  places: [],
};

const mapStateToProps = ({ places }) => ({
  places: places.places,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPlaces: () => dispatch(fetchPlacesRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Places);
