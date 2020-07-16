import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';

import { createPlaceRequest } from '../../store/actions/places';
import FormInput from '../../components/UI/FormElements/FormInput';
import FileInput from '../../components/UI/FormElements/FileInput';

const AddPlace = ({ createPlace }) => {
  const handleSubmit = (values) => {
    const formData = new FormData();
    Object.keys(values).forEach((key) => {
      formData.append(`${key}`, values[key]);
    });
    createPlace(values);
  };
  return (
    <>
      <Formik
        initialValues={{
          title: '',
          description: '',
          promoImage: '',
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <FormInput name="title" label="Place title" required />
          <FormInput
            name="description"
            label="Place description"
            required
            multiline
            rows="5"
          />
          <FileInput name="promoImage" label="Place photo" type="file" />
          <Button type="submit">Submit</Button>
        </Form>
      </Formik>
    </>
  );
};

AddPlace.propTypes = {
  createPlace: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  createPlace: (placeData) => dispatch(createPlaceRequest(placeData)),
});

export default connect(null, mapDispatchToProps)(AddPlace);
