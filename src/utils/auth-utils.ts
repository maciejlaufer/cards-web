import LocalStorageUtils from './local-storage-utils';

function isAuthenticated(): boolean {
  const token = LocalStorageUtils.getItem('auth-token');
  // TODO: decode jwt token and check expiration
  if (token) {
    return true;
  }

  return false;
}

const AuthUtils = {
  isAuthenticated,
};

export default AuthUtils;
