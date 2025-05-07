import React from 'react';

function Register() {
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <form className="bg-gray-800 p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-indigo-400">Регистрация</h2>
        <input type="text" placeholder="Имя" className="w-full p-2 mb-3 rounded bg-gray-700 text-white" />
        <input type="email" placeholder="Email" className="w-full p-2 mb-3 rounded bg-gray-700 text-white" />
        <input type="password" placeholder="Пароль" className="w-full p-2 mb-4 rounded bg-gray-700 text-white" />
        <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 py-2 rounded">
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}

export default Register;