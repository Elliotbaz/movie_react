import React from 'react';

const AuthContext = React.createContext({
  id: 0,
  title: '',
  language: '',
  releaseDate: '',
  imgSource: '',
  voteAverage: '',
  rating: 0,
});

export default AuthContext;
