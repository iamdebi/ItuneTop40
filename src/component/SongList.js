import React from "react";
import Song from "./Song";
import "../song.css";

const SongList = props => {
  const songs = props.top20Songs.map((song, index) => {
    return (
      <Song
        title={song.title}
        key={index}
        rank={index}
        artist={song["im:artist"]}
        image={song["im:image"][0].label}
        preview={song.link[1].attributes.href}
      ></Song>
    );
  });

  return <div className="song-wrapper">{songs}</div>;
};

export default SongList;
