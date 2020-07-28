import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchPlacesRequest } from '../../store/actions/places';
import { PLACE } from '../../utilities/propTypes';
import PlacesList from './PlacesList/PlacesList';

const Places = ({ places, fetchPlaces }) => {
  useEffect(() => {
    const params = {
      page: 1,
      limit: 12,
    };
    fetchPlaces(params);
  }, [fetchPlaces]);

  return (
    <>
      <PlacesList places={places} />
    </>
  );
};

Places.propTypes = {
  fetchPlaces: PropTypes.func.isRequired,
  places: PropTypes.arrayOf(PLACE),
};

Places.defaultProps = {
  places: [],
};

const mapStateToProps = ({ places }) => ({
  places: places.places,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPlaces: (requestParams) => dispatch(fetchPlacesRequest(requestParams)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Places);
