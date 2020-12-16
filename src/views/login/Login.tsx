import React from 'react';
import FormInput from 'components/common/FormInput/FormInput';
import { AuthAPI } from 'api';

const Login = () => {
  function handleSubmit(event: any) {
    event.preventDefault();
    AuthAPI.login('test', 'test');
  }

  return (
    <div>
      Login view
      <form onSubmit={handleSubmit}>
        <FormInput name="username" />
        <FormInput name="password" type="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
