import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import LikedMovieRouter from './components/LikedMoviesRoute';
import MoviesRoute from './components/MoviesRoute';
import Navigation from './components/nav/Navigation';
import LikedMovieProvider from './store/AuthContext';
function App() {
  const [liked, setLiked] = useState([]);

  const passLikedMoviesHandler = movieData => {
    setLiked([...liked, movieData]);
  };

  return (
    <div className="App">
      <LikedMovieProvider.Provider value={[...liked]}>
        <Navigation />
        {/* -------------- Beginning of router ----------------- */}

        <Routes>
          <Route
            path="/"
            element={<MoviesRoute userLikedMovies={passLikedMoviesHandler} />}
          />

          <Route path="/liked" element={<LikedMovieRouter />} />
        </Routes>

        {/* -------------- End of Router ---------------- */}
      </LikedMovieProvider.Provider>
    </div>
  );
}

export default App;
