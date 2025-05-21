import React from 'react';
import { useAppContext } from '../context/AppContext';

const HomeHeader: React.FC = () => {
  const { balance } = useAppContext();

  return (
    <header className="w-full bg-black px-4 py-4 relative flex items-center justify-center shadow-md border-b border-zinc-800">
      {/* Logo centralizada */}
      <img src="../opinilogo.png" alt="Logo Spotify" className="h-8 sm:h-10" />

      {/* Saldo no canto direito */}
      <div className="font-poppins flex items-center gap-2 bg-gradient-to-r from-green-400 to-green-600 px-4 py-1.5 rounded-full shadow-lg text-black font-semibold text-sm">
  <span>Saldo:</span>
  <span className="tracking-wide">U${balance.toFixed(2)}</span>
</div>

    </header>
  );
};

export default HomeHeader;
