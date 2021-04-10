import { combineReducers } from "redux";

// Reducers
const songsReducer = () => {
  return [
    { title: "Typhoons", duration: "4:05" },
    { title: "Blood // Water", duration: "3:37" },
    { title: "Burn", duration: "3:14" },
    { title: "John Muir", duration: "3:39" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {    
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
