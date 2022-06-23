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
      ]
    }
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
