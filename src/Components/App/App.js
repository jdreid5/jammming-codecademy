import React from 'react';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      searchResults: [
        {
          name: 'hello1',
          artist: 'heelo1',
          album: 'hlleo1',
          id: 1
        },
        {
          name: 'hello2',
          artist: 'heelo2',
          album: 'hlleo2',
          id: 2
        },
        {
          name: 'hello3',
          artist: 'heelo3',
          album: 'hlleo3',
          id: 3
        },
      ],
      playlistName: 'Playlist Name',
      playlistTracks: [
        {
          name: 'hello4',
          artist: 'heelo4',
          album: 'hlleo4',
          id: 4
        },
        {
          name: 'hello5',
          artist: 'heelo5',
          album: 'hlleo5',
          id: 5
        },
        {
          name: 'hello6',
          artist: 'heelo6',
          album: 'hlleo6',
          id: 6
        }
      ]
    }
    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({playlistTracks: tracks});
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
