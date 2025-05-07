import React from 'react';
import { useParams } from 'react-router-dom';

function OrderDetails() {
  const { id } = useParams();

  return (
    <div className="p-8">
      <h2 className="text-3xl mb-4 text-indigo-300">Детали заказа #{id}</h2>
      <p className="text-gray-200">Описание, срок, бюджет, кнопка «Взять в работу»...</p>
      <button className="mt-4 bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white">
        Взять в работу
      </button>
    </div>
  );
}

export default OrderDetails;