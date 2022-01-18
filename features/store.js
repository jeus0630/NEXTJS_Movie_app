import {configureStore} from "@reduxjs/toolkit";
import movie from "./movies/movie";

export const store = configureStore({
    reducer : {
        movie : movie
    }
})