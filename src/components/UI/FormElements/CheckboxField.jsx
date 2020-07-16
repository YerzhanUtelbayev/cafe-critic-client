import React from 'react';
import { FormControlLabel, Checkbox } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useField } from 'formik';

const CheckboxField = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <FormControlLabel
      // eslint-disable-next-line react/jsx-props-no-spreading
      control={<Checkbox color="primary" {...field} {...props} />}
      label={label}
    />
  );
};

CheckboxField.propTypes = {
  label: PropTypes.string.isRequired,
};

export default CheckboxField;
