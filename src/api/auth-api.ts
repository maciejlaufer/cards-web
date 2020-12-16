import API from './api-config';

function login(username: string, password: string): Promise<undefined> {
  return API.post(`/login`, {
    username,
    password,
  })
    .then(({ data }) => data)
    .catch((error) => {
      if (error.response) {
        // response error
      } else if (error.request) {
        // request error
      } else {
        console.log('error', error);
      }
    });
}

const AuthAPI = {
  login,
};

export default AuthAPI;
