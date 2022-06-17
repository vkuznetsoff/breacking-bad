import { createSlice } from "@reduxjs/toolkit";
import { EpisodeType } from "../types";


const initEpisodes: EpisodeType[] = [
    {
        episode_id: 1,
        title: "Pilot",
        season: "1",
        characters: [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Hank Schrader",
            "Marie Schrader",
            "Walter White Jr.",
            "Krazy-8",
            "Bogdan Wolynetz"
        ],
        episode: "1"
    },
    {
        episode_id: 2,
        title: "Cat's in the Bag...",
        season: "1",
        characters: [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Walter White Jr.",
            "Krazy-8"
        ],
        episode: "2",
    },
    {
        episode_id: 3,
        title: "...And the Bag's in the River",
        season: "1",
        characters: [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Hank Schrader",
            "Marie Schrader",
            "Walter White Jr.",
            "Krazy-8",
            "Gretchen Schwartz"
        ],
        episode: "3"
    }
]
const episodeSlice = createSlice({
    name: "episodes",
    initialState: initEpisodes,
    
    reducers: {
        addEpisode(state, action) {

        },

        removeEpisode(state, action) {

        }
    }

})

export const {addEpisode, removeEpisode} = episodeSlice.actions

export default episodeSlice.reducer