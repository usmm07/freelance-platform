import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="text-center py-20 px-4">
      <h1 className="text-4xl font-bold mb-4 text-indigo-300 animate-pulse">Добро пожаловать на CodeMarket!</h1>
      <p className="mb-8 text-gray-300">Платформа для поиска и выполнения заказов по программированию</p>
      <Link to="/orders" className="bg-indigo-500 hover:bg-indigo-700 text-white px-6 py-3 rounded transition">
        Смотреть заказы
      </Link>
    </div>
  );
}

export default Home;