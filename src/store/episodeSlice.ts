import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface EpisodeType {
  episode_id: String;
  title: String;
  season: String;
  episode: String;
  characters: String[];
}

interface IininState {
  episodes: EpisodeType[];
  loading: boolean;
  error: String | null;
}

const initEpisodes: EpisodeType[] = [
  {
    episode_id: "1",
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
      "Bogdan Wolynetz",
    ],
    episode: "1",
  },
  {
    episode_id: "2",
    title: "Cat's in the Bag...",
    season: "1",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Walter White Jr.",
      "Krazy-8",
    ],
    episode: "2",
  },
  {
    episode_id: "3",
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
      "Gretchen Schwartz",
    ],
    episode: "3",
  },
];

const initState: IininState = {
  episodes: [],
  loading: false,
  error: null,
};

export const fetchEpisodes = createAsyncThunk<EpisodeType[], void, { rejectValue: string }>(
  "episodes/fetchEpisodes",

  async function (_, { rejectWithValue }) {
    const response = await fetch("https://breakingbadapi.com/api/episodes");

    if (!response.ok) {
      return rejectWithValue("Server Error!");
    }

    const data = await response.json();

    return data;
  }
);

const episodeSlice = createSlice({
  name: "episodes",
  initialState: initState,

  reducers: {
    removeEpisode(state, action: PayloadAction<String>) {
        debugger
      state.episodes = state.episodes.filter((i) => i.episode_id !== action.payload);
    },
  },

  extraReducers: (builder) => {
      builder
      .addCase(fetchEpisodes.pending, (state, action) => {
        state.loading = true
        state.error = null
      })

      .addCase(fetchEpisodes.fulfilled, (state, action) => {
        state.episodes = action.payload
        state.loading = false
        
      })
  }
//  {
//     [fetchEpisodes.pending]: (state: IininState) => {
//       state.status = "loading";
//       state.error = null;
//     },

//     [fetchEpisodes.fullfiled]: (state, action) => {
//       state.status = "resolved";
//       state.episodes = action.payload;
//     },

//     [fetchEpisodes.rejected]: (state, action) => {
//       state.status = "rejected";
//     },
//   },
});

export const { removeEpisode } = episodeSlice.actions;

export default episodeSlice.reducer;
