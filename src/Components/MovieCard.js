import { Link } from "react-router-dom";

const MovieCard = ( { movie, onWatchlistUpdate, watchlist } ) => {
    const isMovieAdded = watchlist.find (watchlistMovie => watchlistMovie.id == movie.id);

    const addToWatchlist = (e) => {
    //  const movieId = e.target.dataset.id;
 
     onWatchlistUpdate((prevWatchlist) => {

    // TODO: Fix Add & Remove logic.
     if(isMovieAdded){
      const favourites = prevWatchlist.filter((watchlistMovie) => 
        watchlistMovie.id !== movie.id);
    
     localStorage.setItem("favourites", JSON.stringify(favourites));
       return favourites;
    
      }else{
       const favourites = [...prevWatchlist, movie];
       localStorage.setItem("favourites", JSON.stringify(favourites));
       return favourites;
      }

     });
      };

    return (
        <div className="movie-card">
            <div>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                <Link to={`/movie-detail/${movie.id}`}><h4>{movie.title}</h4></Link>
                <button data-id={movie.id} onClick={addToWatchlist}>
                    {isMovieAdded ? "Remove from watchlist" : "Add to Watchlist"} 
                    {/* Add to Watchlist */}
                    </button>
                </div>
        </div>
    )
}
export default MovieCard;
// When we are creating watchlist just we have taken movieId = e.target.dataset.id;
// when we are creating favourites we are taking movie = e.target.dataset.id;
// watchlistMovie is replaced by watchlistMovie.id == movie.id;
