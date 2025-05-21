import React, { useEffect } from 'react';

const VideoSection: React.FC = () => {
  useEffect(() => {
    // Load Wistia scripts
    const playerScript = document.createElement('script');
    playerScript.src = 'https://fast.wistia.com/player.js';
    playerScript.async = true;
    
    const embedScript = document.createElement('script');
    embedScript.src = 'https://fast.wistia.com/embed/peyik6brgw.js';
    embedScript.async = true;
    embedScript.type = 'module';
    
    document.head.appendChild(playerScript);
    document.head.appendChild(embedScript);
    
    return () => {
      document.head.removeChild(playerScript);
      document.head.removeChild(embedScript);
    };
  }, []);
  
  return (
    <div className="video-container w-full rounded-xl overflow-hidden shadow-2xl">
      <div className="aspect-w-16 aspect-h-9 relative">
        <style>
          {`
            wistia-player[media-id='peyik6brgw']:not(:defined) {
              background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/peyik6brgw/swatch');
              display: block;
              filter: blur(5px);
              padding-top: 56.25%;
            }
          `}
        </style>
        <wistia-player 
          media-id="peyik6brgw" 
          aspect="1.7777777777777777"
          className="w-full h-full"
        ></wistia-player>
      </div>
    </div>
  );
};

export default VideoSection;