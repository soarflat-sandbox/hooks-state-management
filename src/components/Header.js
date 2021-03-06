import React, { useContext } from 'react';
import { AuthContext } from '../App';

export const Header = () => {
  const { state, dispatch } = useContext(AuthContext);

  return (
    <nav>
      <h1>HOOKED</h1>
      <button onClick={() => dispatch({ type: 'LOGOUT' })}>
        {state.isAuthenticated && <h1>Hi {state.user.firstName} (LOGOUT)</h1>}
      </button>
    </nav>
  );
};

export default Header;
