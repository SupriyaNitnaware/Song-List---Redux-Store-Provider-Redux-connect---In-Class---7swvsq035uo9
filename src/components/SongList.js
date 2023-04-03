import React from "react";
import { connect, useSelector } from "react-redux";

function SongList(props) {

    // const { songs } = props;

    const songs = useSelector((state) => state.songs)

    return (
        <div>
            {songs.map((song) => (
                <div className="song">{song.title}</div>
            ))}
        </div>
    );
}

// const mapStateToProps = (state) => {
//     return { songs: state.songs };
// };

export default SongList;

// Add code here
