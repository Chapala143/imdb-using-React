import Heading from "./Heading";
import MovieCard from "./MovieCard";
import { useEffect, useState } from 'react';
import Pagination from "./Pagination";
import { useMemo } from 'react'; 


// here we are using call back in usestate because after rerender usestate will go to empty array.
// we are initialized with local storage favourite movies.
const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [watchlist, updateWatchlist] = useState(() =>{
      const favouritesData = localStorage.getItem("favourites") || "[]"; 
      return(JSON.parse(favouritesData)); // intial value of watchlist.
    });// array of all  movie ids

    const fetchMovies = (pageNo) => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=9f48a5b363c49e0c31bf3d09bb319827&page=${pageNo}`)
            .then(res => res.json())
            .then(data => setMovies(data.results || []));
      }

      const popularMovieCount = useMemo(() => movies.filter((movie) => {
        console.log("Recompute");
        return movie.popularity > 1000;
      }).length, [movies]);

    useEffect(() => {
        fetchMovies(1);
    }, []);

    

  return (
<>
<Heading />
<p>Total Watchlist: {watchlist.length}</p>
<p>Popular movies (>1000) : {popularMovieCount}</p>
<div className="movie-list">
        {!movies.length && <h1>Loading...</h1>}
        {
            movies?.map(movie => (
                <MovieCard movie={movie} onWatchlistUpdate={updateWatchlist} watchlist={watchlist}/>
            ))
        }
     
    </div>
    <Pagination onPageChange={fetchMovies} />
</>
   
  );
};

export default MovieList;


// function myFunction(a, b){
//   return a * b;
// }
// Semicolons are used to separate executable JavaScript statements. Since a function declaration
// is not an executable statement, it is not common to end it with a semicolon.
