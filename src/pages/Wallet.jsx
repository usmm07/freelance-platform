import React from 'react';

function Wallet() {
  return (
    <div className="p-8">
      <h2 className="text-3xl text-indigo-300 mb-4">Кошелёк</h2>
      <p className="text-gray-200">Баланс: 123$</p>
      <button className="mt-4 bg-indigo-500 hover:bg-indigo-700 px-4 py-2 rounded text-white">
        Пополнить / Вывести
      </button>
    </div>
  );
}

export default Wallet;