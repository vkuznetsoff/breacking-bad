import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

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
  getEpisodes: boolean;
  error: String | null;
}

const initState: IininState = {
  episodes: [],
  loading: false,
  getEpisodes: false,
  error: null,
};


export const fetchEpisodes = createAsyncThunk<EpisodeType[], void, {rejectValue: string }>(
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

    sortEpisodesAsc(state) {
        state.episodes.sort((a:EpisodeType , b: EpisodeType ) => +a.charactersLen - +(b.charactersLen))
         
    },

    sortEpisodesDesc(state) {
        state.episodes.sort((a:EpisodeType , b: EpisodeType ) => +b.charactersLen - +(a.charactersLen))
       
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
        state.getEpisodes = true
        state.loading = false
      })

      .addCase(fetchEpisodes.rejected, (state) => {
        state.error = "Loading Error"
        state.loading = false
      })
  }

});

export const { removeEpisode, incCharacters, decCharacters, 
  sortEpisodesAsc, sortEpisodesDesc } = episodeSlice.actions;

export default episodeSlice.reducer;
