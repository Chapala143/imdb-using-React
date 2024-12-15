import Heading from "./Heading";
import MovieList from "./MovieList";
import MovieDetail from "./MovieDetail";
import AddMovie from "./AddMovie";
import Header from "./Header";
import MovieFavourites from "./MovieFavourites";
import {
    createBrowserRouter,
    RouterProvider,
    BrowserRouter,
    Route,
    Routes,
  } from "react-router-dom";

//     const router = createBrowserRouter([
//     {
//       path: "/",
//       element: (
//         <>
//             <Header />
//             <MovieList />
//         </>
//       ),
//     },
//     {
//         path: "/movie-detail/:movieId",
//         element: (
//           <>
//               <Header />
//               <MovieDetail />
//           </>
//         ),
//       },
//       {
//           path: "/add-movie",
//           element: (
//             <>
//                 <Header />
//                 <AddMovie />
//             </>
//           ),
//         }
//   ]);

// const MovieApp = () => {
//     return (
//         <RouterProvider router={router} />
//     );
// }



const MovieApp = () => {
    return (
<div>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<MovieList />} />
                <Route path="/movie-detail/:movieId" element={<MovieDetail />} />
                <Route path="/favourites" element={<MovieFavourites />} />
                <Route path="/add-movie" element={<AddMovie />} />
            </Routes>
        </BrowserRouter>
</div>
    );
}

export default MovieApp;
