import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center justify-center mb-6">
      <img
        src="../spotifylogo.png"
        alt="Spotify"
        style={{ height: '120px' }} // você pode mudar aqui
      />
      <span
        className="ml-2 font-semibold"
        style={{ color: '#1DB954', fontSize: '60px' }} // e aqui também
      >
        Spotify
      </span>
    </div>
  );
};

export default Logo;
