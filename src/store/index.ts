import { configureStore } from "@reduxjs/toolkit";
import episodeSlice from "./episodeSlice";

export const store = configureStore({
    reducer: {
        episodes: episodeSlice
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch