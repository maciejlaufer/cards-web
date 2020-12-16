import { UserRoles } from 'models';
import LocalStorageUtils from './local-storage-utils';

function isAuthenticated(): boolean {
  const token = LocalStorageUtils.getItem('auth-token');
  // TODO: decode jwt token and check expiration
  if (token) {
    return true;
  }

  return false;
}

function isAuthorized(requiredRoles: UserRoles[]): boolean {
  const token = LocalStorageUtils.getItem('auth-token');
  // check if token payload has required role
  return true;
}

function logout(): void {
  LocalStorageUtils.removeItem('auth-token');
  window.location.href = '/';
}

const AuthUtils = {
  isAuthenticated,
  isAuthorized,
  logout,
};

export default AuthUtils;
