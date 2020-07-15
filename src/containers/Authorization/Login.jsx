import React from 'react';
import { Formik, Form } from 'formik';
import { Button } from '@material-ui/core';

import FormInput from '../../components/UI/FormElements/FormInput';

const Login = () => {
  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
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

export default Login;
