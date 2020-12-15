import React from 'react';
import FormInput from 'components/common/FormInput/FormInput';

const Login = () => {
  return (
    <div>
      Login view
      <FormInput name="username" />
      <FormInput name="password" type="password" />
    </div>
  );
};

export default Login;
