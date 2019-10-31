import React, { useEffect, useReducer } from 'react';
import songsReducer, { initialState } from '../reducers/songsReducer';
import { AuthContext } from '../App';
import songs from '../services/songs';
import Card from './Card';

export const Home = () => {
  const { state: authState } = React.useContext(AuthContext);
  const [state, dispatch] = useReducer(songsReducer, initialState);

  useEffect(() => {
    dispatch({ type: 'FETCH_SONGS_REQUEST' });
    songs
      .getAll({ token: authState.token })
      .then(result => {
        dispatch({
          type: 'FETCH_SONGS_SUCCESS',
          payload: result
        });
      })
      .catch(error => {
        console.error(error);
        dispatch({ type: 'FETCH_SONGS_FAILURE' });
      });
  }, [authState]);

  return (
    <div>
      {state.isFetching ? (
        <span>LOADING...</span>
      ) : state.hasError ? (
        <span>AN ERROR HAS OCCURED</span>
      ) : (
        <>
          {state.songs.length > 0 &&
            state.songs.map(song => (
              <Card key={song.id.toString()} song={song} />
            ))}
        </>
      )}
    </div>
  );
};

export default Home;
