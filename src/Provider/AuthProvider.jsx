import PropTypes from 'prop-types';
import { createContext } from 'react';

export const authContext = createContext(null);

const AuthProvider = ({ children }) => {
  const AuthInfo = { name: 'nayeem' };

  return (
    <authContext.Provider value={AuthInfo}>{children}</authContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
