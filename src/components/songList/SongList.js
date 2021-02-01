import React, { Component } from 'react';
import { connect } from "react-redux";
import { selectSong } from "../../actions";

class SongList extends Component {
    renderList() {
        return this.props.songs.map(song => {
            return (
                <div key={song.duration} className='item'>
                    <div className="right floated content">
                        <button
                            onClick={() => this.props.selectSong(song)}
                            className='ui button primary'>Select</button>
                    </div>
                    <div className='content'>
                        <h5>{song.title}</h5>
                    </div>
                </div>
            )
        })
    }
    render() {

        return (
            <div className='ui divided list'>{this.renderList()}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return { songs: state.songs }
}

export default connect(mapStateToProps, { selectSong })( SongList );
