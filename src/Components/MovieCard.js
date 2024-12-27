import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToWatchList } from "../reducers/watchlist.reducer";


const MovieCard = ( { movie } ) => {
    const watchlist = useSelector((state) => state.watchList.originalFavourites);
    const dispatch = useDispatch();
    const isMovieAdded = watchlist.find (watchlistMovie => watchlistMovie.id === movie.id);

    const addToWatchlist = (e) => {
        dispatch(addToWatchList(movie));
    }

    return (
        <div className="movie-card">
            <div>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} width="200" />
                <Link to={`/movie-detail/${movie.id}`}><h4 className="title">{movie.title}</h4></Link>
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


