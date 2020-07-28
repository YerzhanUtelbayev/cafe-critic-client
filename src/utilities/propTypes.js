import PropTypes from 'prop-types';

export const PLACE_RATINGS = PropTypes.shape({
  overall: PropTypes.number,
  food: PropTypes.number,
  service: PropTypes.number,
  interior: PropTypes.number,
});

export const PLACE = PropTypes.shape({
  _id: PropTypes.string,
  owner: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  promoImage: PropTypes.string,
  thumbnail: PropTypes.string,
  reviewsNumber: PropTypes.number,
  ratings: PLACE_RATINGS,
});

export const PAGINATION = PropTypes.shape({
  totalDocs: PropTypes.number,
  limit: PropTypes.number,
  totalPages: PropTypes.number,
  page: PropTypes.number,
  pagingCounter: PropTypes.number,
  hasPrevPage: PropTypes.bool,
  hasNextPage: PropTypes.bool,
  prevPage: PropTypes.number,
  nextPage: PropTypes.number,
});
