import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';
import { fetchPlaceByIdRequest } from '../../store/actions/places';

const PlaceFullInfo = ({ fetchPlaceById }) => {
  const { id } = useParams();
  useEffect(() => {
    fetchPlaceById(id);
  }, []);
  return <div>Place Info will be displayed here</div>;
};

PlaceFullInfo.propTypes = {
  fetchPlaceById: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchPlaceById: (placeId) => dispatch(fetchPlaceByIdRequest(placeId)),
});

export default connect(null, mapDispatchToProps)(PlaceFullInfo);
