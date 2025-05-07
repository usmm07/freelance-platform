import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className="bg-black/60 dark:bg-gray-800 shadow-lg p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-indigo-400 hover:text-indigo-200">CodeMarket</Link>
      <div className="space-x-4 flex items-center">
        <Link to="/orders" className="hover:text-indigo-300 transition">Заказы</Link>
        <Link to="/profile" className="hover:text-indigo-300 transition">Профиль</Link>
        <Link to="/wallet" className="hover:text-indigo-300 transition">Кошелёк</Link>
        <Link to="/login" className="hover:text-indigo-300 transition">Вход</Link>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 px-2 py-1 text-sm bg-indigo-600 hover:bg-indigo-700 rounded transition"
        >
          {darkMode ? 'Светлая' : 'Тёмная'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;