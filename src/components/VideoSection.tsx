import React, { useEffect } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'wistia-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'media-id': string;
        aspect?: string;
        className?: string;
      };
    }
  }
}

const VideoSection: React.FC = () => {
  useEffect(() => {
    // Load Wistia player script
    const playerScript = document.createElement('script');
    playerScript.src = 'https://fast.wistia.com/player.js';
    playerScript.async = true;
    document.head.appendChild(playerScript);

    // Depois que o script carregar, pegar o player e chamar play()
    playerScript.onload = () => {
      // Esperar que o Wistia esteja definido
      if (window.Wistia && window.Wistia.api) {
        const wistiaEmbed = window.Wistia.api('peyik6brgw');
        if (wistiaEmbed) {
          wistiaEmbed.play();
        }
      } else {
        // Se Wistia não estiver definido ainda, tentar esperar
        const interval = setInterval(() => {
          if (window.Wistia && window.Wistia.api) {
            const wistiaEmbed = window.Wistia.api('peyik6brgw');
            if (wistiaEmbed) {
              wistiaEmbed.play();
              clearInterval(interval);
            }
          }
        }, 500);
      }
    };

    return () => {
      document.head.removeChild(playerScript);
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
          autoPlay="true"
          muted
        ></wistia-player>
      </div>
    </div>
  );
};

export default VideoSection;
