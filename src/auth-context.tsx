import React, { useReducer } from 'react';

type LoginActionType = { type: 'LOGIN'; currentUser: any };
type LogoutActionType = { type: 'LOGOUT' };
type AuthActionTypes = LoginActionType | LogoutActionType;

type AuthDispatch = (action: AuthActionTypes) => void;
type AuthState = { currentUser: any };
type AuthStateProviderProps = { children: React.ReactNode };

const AuthStateContext = React.createContext<AuthState | null>(null);
const AuthDispatchContext = React.createContext<AuthDispatch | null>(null);

function authReducer(state: AuthState, action: AuthActionTypes) {
  switch (action.type) {
    case 'LOGIN': {
      return {
        ...state,
        currentUser: action.currentUser,
      };
    }
    case 'LOGOUT':
      return { ...state, currentUser: null };
    default: {
      throw new Error(`Unhandled auth action type`);
    }
  }
}

function AuthStateProvider({ children }: AuthStateProviderProps) {
  const [state, dispatch] = useReducer(authReducer, {
    currentUser: null,
  });

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
}

function useAuthState(): AuthState {
  const context = React.useContext(AuthStateContext);
  if (!context) {
    throw new Error('useAuthState must be used within a AuthStateProvider');
  }

  return context;
}

function useAuthDispatch(): AuthDispatch {
  const context = React.useContext(AuthDispatchContext);
  if (!context) {
    throw new Error('useCountDispatch must be used within a AuthStateProvider');
  }

  return context;
}

export { AuthStateProvider, useAuthState, useAuthDispatch };
