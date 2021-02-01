import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    if(!song) {
        return <div>No song selected</div>
    }
    return (
        <div>
            <h2>Title: {song.title}</h2>
            <strong>Duration: {song.duration}</strong>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        song: state.selectedSong
    }
}

export default connect(mapStateToProps)(SongDetail)