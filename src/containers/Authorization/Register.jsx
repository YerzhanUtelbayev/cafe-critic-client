import React from 'react';
import { Formik, Form } from 'formik';
import { Button } from '@material-ui/core';

import FormInput from '../../components/UI/FormElements/FormInput';
import FileInput from '../../components/UI/FormElements/FileInput';

const Register = () => (
  <>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        avatarImage: '',
        address: {
          street: '',
          city: '',
          country: '',
        },
      }}
    >
      <Form>
        <FormInput name="firstName" label="First name" required />
        <FormInput name="lastName" label="Last name" />
        <FormInput name="email" label="Email address" type="email" required />
        <FormInput name="password" label="Password" type="password" required />
        <FileInput name="avatarImage" label="Avatar image" type="file" />
        <FormInput name="address.street" label="Street" />
        <FormInput name="address.city" label="City" />
        <FormInput name="address.country" label="Country" />
        <Button type="submit">SUbmit</Button>
      </Form>
    </Formik>
  </>
);

export default Register;
