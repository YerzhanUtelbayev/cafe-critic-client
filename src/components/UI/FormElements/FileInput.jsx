import React from 'react';
import { Fab, FormControl, Input } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import { useField } from 'formik';

const FileInput = ({ label, ...props }) => {
  // eslint-disable-next-line no-unused-vars
  const [field, meta, helpers] = useField(props);
  const fileChangeHandler = (event) => {
    const { target } = event;
    helpers.setValue(target.files[0]);
  };
  return (
    <FormControl>
      <label htmlFor="upload-photo">
        <Fab
          color="primary"
          size="small"
          component="span"
          aria-label="add"
          variant="extended"
        >
          <AddIcon />
          {label}
        </Fab>
        <Input
          style={{ display: 'none' }}
          id="upload-photo"
          type="file"
          onChange={fileChangeHandler}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...props}
        />
      </label>
    </FormControl>
  );
};

FileInput.propTypes = {
  label: PropTypes.string.isRequired,
};

export default FileInput;
