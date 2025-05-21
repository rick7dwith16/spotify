import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-black py-4 flex justify-center items-center shadow-md border-b border-zinc-800">
      <img
        src="../opinilogo.png" // Caminho da sua logo
        alt="Spotify Logo"
        className="h-8 sm:h-10"
      />
    </header>
  );
};

export default Header;
