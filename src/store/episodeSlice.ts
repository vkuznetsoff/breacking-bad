import { ActionCreatorWithPayload, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface EpisodeType {
  episode_id: Number;
  title: String;
  season: String;
  episode: String;
  characters: String[];
  charactersLen: number;

}

interface IininState {
  episodes: EpisodeType[];
  loading: boolean;
  error: String | null;
}

// const initEpisodes: EpisodeType[] = [
//   {
//     episode_id: "1",
//     title: "Pilot",
//     season: "1",
//     characters: [
//       "Walter White",
//       "Jesse Pinkman",
//       "Skyler White",
//       "Hank Schrader",
//       "Marie Schrader",
//       "Walter White Jr.",
//       "Krazy-8",
//       "Bogdan Wolynetz",
//     ],
//     episode: "1",
//   },
//   {
//     episode_id: "2",
//     title: "Cat's in the Bag...",
//     season: "1",
//     characters: [
//       "Walter White",
//       "Jesse Pinkman",
//       "Skyler White",
//       "Walter White Jr.",
//       "Krazy-8",
//     ],
//     episode: "2",
//   },
//   {
//     episode_id: "3",
//     title: "...And the Bag's in the River",
//     season: "1",
//     characters: [
//       "Walter White",
//       "Jesse Pinkman",
//       "Skyler White",
//       "Hank Schrader",
//       "Marie Schrader",
//       "Walter White Jr.",
//       "Krazy-8",
//       "Gretchen Schwartz",
//     ],
//     episode: "3",
//   },
// ];

const initState: IininState = {
  episodes: [],
  loading: false,
  error: null,
};

// const sortFn = (a: EpisodeType, b: EpisodeType, type: String): Number | undefined => {
//     if (type === "asc") {
//         return +a.episode_id - +(b.episode_id)
//     }

//     if (type === "desc") {
//        return +b.episode_id - +(a.episode_id) 
//     }
    
// }

export const fetchEpisodes = createAsyncThunk<EpisodeType[], void, { rejectValue: string }>(
  "episodes/fetchEpisodes",

  async function (_, { rejectWithValue}) {
    const response = await fetch("https://breakingbadapi.com/api/episodes/");

    if (!response.ok) {
      return rejectWithValue("Server Error!");
    }

    const data = await response.json();

    data.sort((a:EpisodeType , b: EpisodeType ) => +a.episode_id - +(b.episode_id))
    
    return data;
  }
);


const episodeSlice = createSlice({
  name: "episodes",
  initialState: initState,
  

  reducers: {
    removeEpisode(state, action: PayloadAction<Number>) {
      state.episodes = state.episodes.filter((i) => i.episode_id !== action.payload);
    },

    sortEpisodes(state) {
        state.episodes.sort()
    },

    incCharacters(state, action: PayloadAction<Number>) {
       const episode = state.episodes.find(i => i.episode_id === action.payload)
       if (episode) {
           episode.charactersLen = episode.charactersLen + 1
       }
    },

    decCharacters(state, action: PayloadAction<Number>) {
        const episode = state.episodes.find(i => i.episode_id === action.payload)
        if (episode) {
            episode.charactersLen = episode.charactersLen - 1
        }
    },

  },

  extraReducers: (builder) => {
      builder
      .addCase(fetchEpisodes.pending, (state) => {
        state.loading = true
        state.error = null
      })

      .addCase(fetchEpisodes.fulfilled, (state, action) => {
        state.episodes = action.payload
        state.episodes.map(ep => ep.charactersLen = ep.characters.length)
        state.loading = false
      })

      .addCase(fetchEpisodes.rejected, (state) => {
        state.error = "Loading Error"
        state.loading = false
      })
  }

});

export const { removeEpisode, incCharacters, decCharacters } = episodeSlice.actions;

export default episodeSlice.reducer;
