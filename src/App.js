import React from 'react';
import './App.css';
import VideoCard from './VideoCard';

function App() {
  return (

    // BEM naming convention
    <div className="app">
      {/* App top */}
      <div className="app__top">
        <img className="app__logo" src="/logo192.png" alt="" />
        <h1>Reels</h1>
      </div>

      {/* App videos */}
      <div className="app__videos">
        <VideoCard />
        <VideoCard />
        <VideoCard />

      </div>
    </div>
  );
}

export default App;
