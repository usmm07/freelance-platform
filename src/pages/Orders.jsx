import React from 'react';
import { Link } from 'react-router-dom';

function Orders() {
  const dummyOrders = [
    { id: 1, title: 'Сайт на React', budget: '150$', deadline: '5 дней' },
    { id: 2, title: 'Бэкенд на Django', budget: '200$', deadline: '7 дней' },
  ];

  return (
    <div className="p-8">
      <h2 className="text-3xl mb-6 text-indigo-300">Доступные заказы</h2>
      <div className="space-y-4">
        {dummyOrders.map(order => (
          <div key={order.id} className="bg-gray-800 p-4 rounded shadow-md">
            <h3 className="text-xl font-semibold text-white">{order.title}</h3>
            <p className="text-sm text-gray-400">Бюджет: {order.budget} | Срок: {order.deadline}</p>
            <Link to={`/orders/${order.id}`} className="text-indigo-400 hover:underline">
              Подробнее
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;