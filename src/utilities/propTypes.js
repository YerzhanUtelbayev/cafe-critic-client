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
  reviewsNumber: PropTypes.number,
  ratings: PLACE_RATINGS,
});
