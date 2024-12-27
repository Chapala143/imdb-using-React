import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    list: [],
}

export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.list = action.payload;
        }
    }
});

export const { setMovies } = movieSlice.actions;

export default movieSlice.reducer;
