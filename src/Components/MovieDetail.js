
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const MovieDetail = () => {
    const [movieDetail, setMovieDetail] = useState({});
    const params = useParams();
    console.log(params);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${params.movieId}?api_key=dbc973d93a2f6d574c69c59667046198`)
        .then((res) => res.json())
        .then((data) => setMovieDetail(data));
    }, []);
     console.log(movieDetail);
    return (
        <>
        <h1>Movie Details</h1>
        <hr />
        <h2>{movieDetail.title}</h2>
        <img src={`https://image.tmdb.org/t/p/w500/${movieDetail.backdrop_path}`} />
        <p>{movieDetail.overview}</p>
        </>
    )
}

export default MovieDetail;
