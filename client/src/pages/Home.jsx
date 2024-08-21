import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();

  const handleProfileClick = () => {
    history.push('/login');
  };

  return (
    <div>
      <header>
        <h1>BeatBound 🎵</h1>
        <input type="text" placeholder="Search..." />
        <nav>
          <button>Home / Explore</button>
          <button onClick={handleProfileClick}>My Profile</button>
        </nav>
      </header>
      <section>
        <h2>Featured Playlists</h2>
        <div>
          {/* TODO: Add featured playlists here */}
        </div>
      </section>
      <footer>
        <div>
          {/* TODO: Add Now Playing bar here */}
        </div>
      </footer>
    </div>
  );
};

export default Home;
