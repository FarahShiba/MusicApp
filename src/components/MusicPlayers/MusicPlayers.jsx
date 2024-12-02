import MusicCard from "../MusicCard/MusicCard";
import { useState } from "react";
import Header from "../Header/Header";

//Classes and Scripts:
//This component is typically used within a React application concerned with music playback and display.

//Members:
// useState: React hook used for managing component state.
// songs: State variable that holds the array of song data.
// isSearched: State variable indicating whether a search has been performed.
const MusicPlayers = () => {
  const [songs, setSongs] = useState([]);
  const [isSearched, setIsSearched] = useState(false);

  return (
    // Parameters:
    // Header: A component displayed at the top of the music player interface. It receives a callback function `onFetch` and a title string.
    // MusicCard: A component that displays the list of songs. It takes `songs` and `isSearched` as props.
    <div>
      <div className="content1">
        <h1>💿💿Welcome to Music Album🎹🎹</h1>
        <p>Playing musical and turn on with music on my webpage.🎷🎷</p>
      </div>
      <Header
        onFetch={(data) => {
          setIsSearched(true);
          setSongs(data);
        }}
        title="fun a lot"
      />
      <MusicCard songs={songs} isSearched={isSearched} />
    </div>
  );
};

export default MusicPlayers;
