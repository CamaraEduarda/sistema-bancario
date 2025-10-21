import React, { useState } from 'react';
import Login from './Login';
import Home from './Home';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'login' | 'home'>('login');

  const handleLogin = () => {
    setCurrentPage('home');
  };

  return (
    <div>
      {currentPage === 'login' ? <Login onLogin={handleLogin} /> : <Home />}
    </div>
  );
};

export default App;