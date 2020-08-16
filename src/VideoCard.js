import React, { useRef, useState } from 'react';
import './VideoCard.css';
import VideoHeader from './VideoHeader';

function VideoCard() {
    const videoRef = useRef(null);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const onVideoPress = () => {
        if(isVideoPlaying){
            // stop
            videoRef.current.pause();
            setIsVideoPlaying(false);
        }
        else{
            //play
            videoRef.current.play();
            setIsVideoPlaying(true); 
        }
    }
    // useState
    // useRef 

    return (
        <div className='videoCard'>
            <VideoHeader />
            <video className="video__player"
                ref = {videoRef}
                onClick={onVideoPress}
                src="/test.webm"
                alt='IG reel video'
                loop
            />
        </div>
    )
}

export default VideoCard
