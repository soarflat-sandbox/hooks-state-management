import React, { useReducer, createContext } from 'react';
import Login from './components/Login';
import Home from './components/Home';
import Header from './components/Header';
import reducer, { initialState } from './reducer';

export const AuthContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <Header />
      <div>{state.isAuthenticated ? <Home /> : <Login />}</div>
    </AuthContext.Provider>
  );
}

export default App;
