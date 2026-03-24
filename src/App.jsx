import { AllSongs } from './components/Allsongs';
import { MusicPlayer } from './components/MusicPlayer';
import { MusicProvider } from './components/contexts/MusicContext';
import { Playlists } from './components/Playlists';
import { BrowserRouter, Routes, Route } from 'react-router';

function App() {
  return (
    <BrowserRouter>
      <MusicProvider>
        <div className="app">
          {/* <Navbar />*/}
          <main className="app-main">
            <div className="player-section">
              <MusicPlayer />
            </div>
            <div className="content-section">
              <Routes>
                <Route path="/" element={<AllSongs />} />
                <Route path="/playlists" element={<Playlists />} />
              </Routes>
            </div>
          </main>
        </div>
      </MusicProvider>
    </BrowserRouter>
  );
}

export default App;
