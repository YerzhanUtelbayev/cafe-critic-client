import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';

import FormInput from '../../components/UI/FormElements/FormInput';
import FileInput from '../../components/UI/FormElements/FileInput';
import { registerUserRequest } from '../../store/actions/users';

const Register = ({ registerUser }) => {
  const submitHandler = (values) => {
    const formData = new FormData();
    Object.keys(values).forEach((key) => {
      formData.append(`${key}`, values[key]);
    });
    registerUser(formData);
  };

  return (
    <>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          avatarImage: '',
          street: '',
          city: '',
          country: '',
        }}
        onSubmit={submitHandler}
      >
        <Form>
          <FormInput name="firstName" label="First name" required />
          <FormInput name="lastName" label="Last name" />
          <FormInput name="email" label="Email address" type="email" required />
          <FormInput
            name="password"
            label="Password"
            type="password"
            required
          />
          <FileInput name="avatarImage" label="Avatar image" type="file" />
          <FormInput name="street" label="Street" />
          <FormInput name="city" label="City" />
          <FormInput name="country" label="Country" />
          <Button type="submit">Submit</Button>
        </Form>
      </Formik>
    </>
  );
};

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  registerUser: (userData) => dispatch(registerUserRequest(userData)),
});

export default connect(null, mapDispatchToProps)(Register);
