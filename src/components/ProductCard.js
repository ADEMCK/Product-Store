import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProductCard({ product, onEdit, onDelete }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain mb-4"
      />
      <h2 className="text-xl font-bold mb-2">{product.title}</h2>
      <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
      <p className="text-lg font-bold text-green-600 mb-4">{product.price} TL</p>
      
      <div className="flex justify-between">
        <button
          onClick={() => navigate(`/product/${product.id}`)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Detaylar
        </button>
        <div className="space-x-2">
          <button
            onClick={() => onEdit(product)}
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
          >
            Düzenle
          </button>
          <button
            onClick={() => onDelete(product)}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Sil
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;