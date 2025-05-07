import React from 'react';

function Profile() {
  return (
    <div className="p-8">
      <h2 className="text-3xl text-indigo-300 mb-4">Мой профиль</h2>
      <div className="bg-gray-800 p-4 rounded shadow">
        <p className="text-white">Имя: Иван</p>
        <p className="text-white">Рейтинг: 4.9</p>
        <p className="text-white">Портфолио: ...</p>
      </div>
    </div>
  );
}

export default Profile;