import React, { useState } from "react";

function SearchBar({ movie, setMovie, onSearch, loading, allMovies }) {
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie(value);

    if (value.length > 1) {
      const filtered = allMovies
        .filter((m) =>
          m.toLowerCase().includes(value.toLowerCase())
        )
        .slice(0, 5);

      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (name) => {
    setMovie(name);
    setSuggestions([]);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !loading) {
      setSuggestions([]);
      onSearch();
    }
  };

  return (
    <div className="search-bar">
      <div className="search-inner">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={movie}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          disabled={loading}
        />

        <button
          className="search-button"
          onClick={onSearch}
          disabled={loading || !movie.trim()}
        >
          {loading ? "Searching..." : "Recommend"}
        </button>
      </div>

      {/* Suggestions dropdown */}
      {suggestions.length > 0 && (
        <div className="suggestions-box">
          {suggestions.map((s, i) => (
            <div
              key={i}
              className="suggestion-item"
              onClick={() => handleSelect(s)}
            >
              {s}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;