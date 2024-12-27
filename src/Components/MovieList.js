import Heading from "./Heading";
import MovieCard from "./MovieCard";
import { useEffect } from 'react';
import Pagination from "./Pagination";
import { useMemo } from 'react'; 
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../reducers/movieList.reducer";



// here we are using call back in usestate because after rerender usestate will go to empty array.
// we are initialized with local storage favourite movies.
const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.list);


    const fetchMovies = (pageNo) => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=9f48a5b363c49e0c31bf3d09bb319827&page=${pageNo}`)
            .then(res => res.json())
            .then(data => dispatch(setMovies(data.results || [])));
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
     
     <p>Popular movies (>1000): {popularMovieCount}</p>

     <div className="movie-list">
     {!movies.length && <h1>Loading...</h1>}
        {
            movies?.map(movie => (
     <MovieCard movie={movie} />
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
