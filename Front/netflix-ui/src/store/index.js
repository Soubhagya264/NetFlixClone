import {
    configureStore,
    createAsyncThunk,
    createSlice,
} from '@reduxjs/toolkit';
import axios from 'axios';
import { TMDB_BASE_URL,API_KEY } from '../utils/constants';

const initialState = {
    movies: [],
    genersLoaded: false,
    genres: [],
}



export const getGenres = createAsyncThunk("netflix/genres", async () => {
    const {
      data
    } = await axios.get(
        `${TMDB_BASE_URL}/genre/movie/list?api_key=${API_KEY}`
    );
    console.log(data.genres);
    return data.genres;
  });


const NetflixSlice = createSlice({
    name: 'Netflix',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getGenres.fulfilled, (state, action) => {
            state.genres = action.payload;
            state.genersLoaded = true;
        }
        );
    },

});

export const store = configureStore({
    reducer: {
        netflix: NetflixSlice.reducer,
    },
});