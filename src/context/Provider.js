import React, { createContext, useReducer } from 'react';
import authReducer from './reducers/authReducer';
import authInitState from './initialStates/authInitState';
import contactsReducer from './reducers/contactsReducer';
import contactInitState from './initialStates/contactInitState';

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, authInitState);
  const [contactsState, contactsDispatch] = useReducer(
    contactsReducer,
    contactInitState,
  );

  return (
    <GlobalContext.Provider
      value={{
        authState,
        contactsState,
        authDispatch,
        contactsDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
