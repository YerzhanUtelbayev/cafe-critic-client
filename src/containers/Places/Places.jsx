import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Box } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import PropTypes from 'prop-types';

import { fetchPlacesRequest } from '../../store/actions/places';
import { PLACE, PAGINATION } from '../../utilities/propTypes';
import PlacesList from './PlacesList/PlacesList';

const Places = ({ places, pagination, fetchPlaces }) => {
  const [page, setPage] = useState(1);
  const { totalPages } = pagination;

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    const params = {
      page: page || 1,
      limit: 12,
    };
    fetchPlaces(params);
  }, [fetchPlaces, page]);

  return (
    <>
      <Box py={3}>
        <PlacesList places={places} />
      </Box>

      <Box my={3}>
        <Pagination
          count={totalPages}
          page={page}
          siblingCount={1}
          boundaryCount={1}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>
    </>
  );
};

Places.propTypes = {
  fetchPlaces: PropTypes.func.isRequired,
  places: PropTypes.arrayOf(PLACE),
  pagination: PAGINATION,
};

Places.defaultProps = {
  places: [],
  pagination: {},
};

const mapStateToProps = ({ places }) => ({
  places: places.places,
  pagination: places.pagination,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPlaces: (requestParams) => dispatch(fetchPlacesRequest(requestParams)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Places);
