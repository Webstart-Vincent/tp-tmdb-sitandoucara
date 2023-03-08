//https://api.themoviedb.org/3/movie/popular?api_key=f21f9a3af90d3b652b0fefe8ced2e831&language=fr-FR

const getPopularMovies = fetch(
  "https://api.themoviedb.org/3/movie/popular?api_key=f21f9a3af90d3b652b0fefe8ced2e831&language=fr-FR"
)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((error) => console.error("error > ", error));

export { getPopularMovies };
