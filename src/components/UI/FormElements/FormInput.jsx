import React from 'react';
import { TextField } from '@material-ui/core';
import { useField } from 'formik';
import PropTypes from 'prop-types';

const FormInput = ({ label, type, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <TextField
      label={label}
      className="form-control"
      type={type || 'text'}
      helperText={meta.touched && meta.error && meta.error}
      variant="outlined"
      fullWidth
      {...field}
      {...props}
    />
  );
};

FormInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
};

FormInput.defaultProps = {
  label: '',
  type: 'text',
};

export default FormInput;
