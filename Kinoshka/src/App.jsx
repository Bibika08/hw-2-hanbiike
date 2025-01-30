import { useState } from 'react';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [movieInput, setMovieInput] = useState(''); 


  const addMovie = () => {
    if (movieInput.trim() !== '') {
      setMovies((prevMovies) => [...prevMovies, movieInput]);
      setMovieInput('');
    }
  };

 
  const deleteMovie = (index) => {
    setMovies((prevMovies) => prevMovies.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <h1>Kinoshka</h1>
      <div className="input-container">
        <input
          type="text"
          value={movieInput}
          onChange={(e) => setMovieInput(e.target.value)}
          placeholder="Добавьте новый фильм"
        />
        <button onClick={addMovie}>Добавить</button>
      </div>
      
      <div className="movie-list">
        <ul>
          {movies.map((movie, index) => (
            <li key={index} className="movie-item">
              {movie}
              <button onClick={() => deleteMovie(index)} className="delete-btn">Удалить</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
