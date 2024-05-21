function ListOfMovies({ movies }) {
  const listMovie = movies.map((movie) => {
    return (
      <li key={movie.id} className="movie">
        <h3>{movie.title}</h3>
        <p>{movie.year}</p>
        <img src={movie.poster} alt={movie.title} />
      </li>
    );
  });
  return <ul className="movies">{listMovie}</ul>;
}

function NoMoviesResults() {
  return <p>No se encontraron peliculas</p>;
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0;
  return hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResults />;
}
