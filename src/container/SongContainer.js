import React, { Fragment } from "react";
import SongList from "../component/SongList";

class SongContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      top40: [],
      selectedSong: "",
      updated: ""
    };
  }

  componentDidMount() {
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=40/json";
    console.log("componentDidMount");

    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({ updated: data.feed.updated.label }))
      .catch(error => console.error());

    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({ top40: data.feed.entry }))
      .catch(error => console.error());
  }

  render() {
    if (!this.state.updated) {
      return <h2>Loading....</h2>;
    }
    return (
      <Fragment>
        <h2>Itunes Top 40</h2>
        <p>Last updated {this.state.updated}</p>
        <SongList top20Songs={this.state.top40}></SongList>
      </Fragment>
    );
  }
}

export default SongContainer;
