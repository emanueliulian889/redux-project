import { combineReducers } from "redux";

const songReducer = () => {
    return[
        { title: 'Song #1', duration: '2: 45' },
        { title: 'Song #2', duration: '1: 25' },
        { title: 'Song #3', duration: '5: 12' },
        { title: 'Song #4', duration: '3: 46' }
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
})