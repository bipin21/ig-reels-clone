import React, { useState, useEffect } from 'react';
import './App.css';
import VideoCard from './VideoCard';
import db from './firebase'

function App() {
  const [reels, setReels] = useState([]);
  useEffect(() => {
    // app components will load once and never again
    db.collection("reels").onSnapshot(snapshot => (
      setReels(snapshot.docs.map(doc => doc.data()))
    )
    )
  }, []);

  return (
    // BEM naming convention
    <div className="app" >
      {/* App top */}
      < div className="app__top" >
        <img className="app__logo" src="/logo192.png" alt="" />
        <h1>Reels </h1>
      </div >

      {/* App videos */}
      <div className="app__videos">
        {reels.map(({ channel, avatarSrc, song, url, likes, shares }) => (
          <VideoCard
            channel={channel}
            avatarSrc={avatarSrc}
            song={song}
            url={url}
            likes={likes}
            shares={shares}
          />
        )
        )}


      </div >
    </div >
  );
}

export default App;