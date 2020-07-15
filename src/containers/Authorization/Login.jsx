import React from 'react';
import { Formik, Form, connect } from 'formik';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';

import FormInput from '../../components/UI/FormElements/FormInput';
import { loginUserRequest } from '../../store/actions/users';

const Login = ({ loginUser }) => {
  const submitHandler = (values) => {
    loginUser(values);
  };
  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={submitHandler}
      >
        <Form>
          <FormInput name="email" label="Email" type="email" required />
          <FormInput
            name="password"
            label="Password"
            type="password"
            required
          />
          <Button type="submit">Submit</Button>
        </Form>
      </Formik>
    </>
  );
};

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  loginUser: (userData) => dispatch(loginUserRequest(userData)),
});

export default connect(null, mapDispatchToProps)(Login);
