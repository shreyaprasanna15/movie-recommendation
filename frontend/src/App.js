import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import SearchBar from "./components/SearchBar";
import Recommendations from "./components/Recommendations";

function App() {
  const [movie, setMovie] = useState("");
  const [results, setResults] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  // 🔥 Fetch movie list for suggestions
  useEffect(() => {
    fetch("http://127.0.0.1:5000/movies")
      .then((res) => res.json())
      .then((data) => setAllMovies(data.movies || []))
      .catch((err) => console.error("Error fetching movies:", err));
  }, []);

  // 🎬 Handle recommendation search
  const handleSearch = async () => {
    if (!movie.trim()) return;

    setLoading(true);
    setSearched(true);
    setResults([]);

    try {
      const res = await axios.post("http://127.0.0.1:5000/recommend", {
        movie: movie.trim(),
      });

      setResults(res.data.recommendations || []);
    } catch (error) {
      console.error("Error fetching recommendations:", error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-shell">
      <div className="app">
        
        {/* 🌸 HEADER */}
        <header className="hero">
          <p className="eyebrow">Girly Pink Recommendations</p>
          <h1>🎬 Pick Your Movies Love</h1>
          <p className="hero-copy">
            Search for a movie and discover dreamy recommendations in a cute layout.
          </p>
        </header>

        {/* 🔍 SEARCH BAR */}
        <SearchBar
          movie={movie}
          setMovie={setMovie}
          onSearch={handleSearch}
          loading={loading}
          allMovies={allMovies}   // 👈 IMPORTANT (for suggestions)
        />

        {/* 🎥 RESULTS */}
        <Recommendations
          results={results}
          loading={loading}
          searched={searched}
        />

      </div>
    </div>
  );
}

export default App;