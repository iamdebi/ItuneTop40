import React from "react";
import "../song.css";

function Song(props) {
  const index = parseInt(props.rank);
  const postion = index + 1;
  return (
    <div className="song-tile">
      <h1>Position: {postion}</h1>
      <img src={props.image} alt="album cover" />
      <h3>{props.title.label}</h3>
      <audio controls src={props.preview}></audio>
      <break />
    </div>
  );
}
export default Song;
