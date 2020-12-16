import { UserRoles } from 'models';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthUtils } from 'utils';

type PrivateRouteProps = {
  path: string;
  component: React.ElementType;
  exact?: boolean;
  roles?: UserRoles[];
};

function PrivateRoute({
  component: Component,
  roles,
  ...restProps
}: PrivateRouteProps): JSX.Element {
  const isAuthenticated = AuthUtils.isAuthenticated();

  return (
    <Route
      {...restProps}
      render={(props: any) => {
        if (!isAuthenticated) {
          return (
            <Redirect
              to={{ pathname: '/login', state: { from: props.location } }}
            />
          );
        }

        if (roles && AuthUtils.isAuthorized(roles)) {
          return <Redirect to={{ pathname: '/' }} />;
        }

        return <Component {...props} />;
      }}
    />
  );
}

export default PrivateRoute;
