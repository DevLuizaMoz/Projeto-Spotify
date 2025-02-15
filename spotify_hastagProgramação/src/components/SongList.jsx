import React from "react";
import SongItem from "./SongItem";

const SongList = ({songsArray}) => {
    const items = 5;
    return (
        <div className="song-list">
            {songsArray.filter((currentValue, index)=> index < items).map((currentsongObj, index) => (
                <SongItem {...currentsongObj} index={index}/>
            ))}

            <p className="song-list__see-more">Ver mais</p>
        </div>
    );
};

export default SongList