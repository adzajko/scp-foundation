import React, { useReducer } from 'react';
import { AuthReducer, initialState } from './reducers';

const AuthStateContext = React.createContext();
const AuthStateDispatch = React.createContext();

export const useAuthState = () => {
  const context = React.useContext(AuthStateContext);
  if (!context) {
    throw new Error('Must be used within an Auth provider!');
  }

  return context;
};

export const useAuthDispatch = () => {
  const context = React.useContext(AuthStateDispatch);
  if (!context) {
    throw new Error('Bro.');
  }

  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, dispatch] = useReducer(AuthReducer, initialState);
  return (
    <AuthStateContext.Provider value={user}>
      <AuthStateDispatch.Provider value={dispatch}>
        {children}
      </AuthStateDispatch.Provider>
    </AuthStateContext.Provider>
  );
};
