import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Music, DollarSign, HelpCircle } from 'lucide-react';

// Pages
import Login from './pages/Login';
import Home from './pages/Home';
import Saque from './pages/saque';
import Faq from './pages/Faq';
import VerificationPage from './pages/Verificacao';

// Components
import BottomNavigation from './components/BottomNavigation';

// Context
import { AppProvider } from './context/AppContext';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsLoggedIn(true);
      if (location.pathname === '/') {
        navigate('/home');
      }
    } else if (location.pathname !== '/') {
      navigate('/');
    }
  }, [location.pathname, navigate]);

  const routes = [
    { path: '/home', icon: <Music size={24} />, label: 'Home' },
    { path: '/saque', icon: <DollarSign size={24} />, label: 'Saque' },
    { path: '/faq', icon: <HelpCircle size={24} />, label: 'FAQ' }
  

  ];

  return (
    <AppProvider>
      <div className="flex flex-col min-h-screen bg-black text-white">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/saque" element={<Saque />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/verificacao" element={<VerificationPage />} />
          </Routes>
        </div>
        
        {isLoggedIn && (
          <div className="sticky bottom-0 z-10">
            <BottomNavigation routes={routes} />
          </div>
        )}
      </div>
    </AppProvider>
  );
}

export default App;