import {createSlice} from "@reduxjs/toolkit";

const movieSlice = createSlice({
   name : 'movies',
   initialState : {
       keyword : null
   },
   reducers : {
       setKeyword : (state, {payload}) => {
           state.keyword = payload;
       }
   }
});

export const {setKeyword} = movieSlice.actions;
export const getKeyword = state => state.movie.keyword;
export default movieSlice.reducer;