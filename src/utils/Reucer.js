import { reducerCase } from "./Constants";

export const initialState = {
  token: null,
  userInfo: null,
  playlists: [],
  currentlyPlaying: null,
  playerState: false,
  selectedPlaylist: null,
  selectedPlaylistId: "3cEYpjA9oz9GiPac4AsH4n",
};

const reducer = (state, action) => {
  switch (action.type) {
    case reducerCase.SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case reducerCase.SET_PLAYLISTS:
      return {
        ...state,
        playlists: action.playlists,
      };
    case reducerCase.SET_USER:
      return {
        ...state,
        userInfo: action.userInfo,
      };
    case reducerCase.SET_PLAYLIST_ID:
      return {
        ...state,
        selectedPlaylistId: action.selectedPlaylistId,
      };
    case reducerCase.SET_PLAYER_STATE:
      return {
        ...state,
        playerState: action.playerState,
      };
    case reducerCase.SET_PLAYING:
      return {
        ...state,
        currentlyPlaying: action.currentlyPlaying,
      };
    case reducerCase.SET_PLAYLIST:
      return {
        ...state,
        selectedPlaylist: action.selectedPlaylist,
      };
    default:
      return state;
  }
};

export default reducer;
