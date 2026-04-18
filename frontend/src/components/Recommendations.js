import React from "react";

function Recommendations({ results, loading, searched }) {
  if (loading) {
    return (
      <div className="status-card loading-card">
        <div className="loader" />
        <p>Finding the perfect picks...</p>
      </div>
    );
  }

  if (!searched) {
    return (
      <div className="status-card empty-card">
        <p>Search for a movie to reveal soft pink recommendations.</p>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="status-card empty-card">
        <p>No results found. Try a different title or spelling.</p>
      </div>
    );
  }

  return (
    <div className="recommendations-grid">
      {results.map((movie, index) => (
        <article className="recommendation-card" key={index}>
          <div className="poster-placeholder">
            <span>{movie.charAt(0) || "🎬"}</span>
          </div>
          <div className="movie-card-info">
            <h3>{movie}</h3>
            <p>Recommended just for you</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default Recommendations;