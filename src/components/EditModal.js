import React, { useState, useEffect } from 'react';

function EditModal({ product, isOpen, onClose, onSave }) {
  const [editedProduct, setEditedProduct] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    image: ''
  });

  useEffect(() => {
    if (product) {
      setEditedProduct(product);
    }
  }, [product]);

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4">Ürün Düzenle</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ürün Adı
            </label>
            <input
              type="text"
              value={editedProduct.title}
              onChange={(e) => setEditedProduct({...editedProduct, title: e.target.value})}
              className="w-full border p-2 rounded focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Açıklama
            </label>
            <textarea
              value={editedProduct.description}
              onChange={(e) => setEditedProduct({...editedProduct, description: e.target.value})}
              className="w-full border p-2 rounded focus:ring-blue-500 focus:border-blue-500"
              rows="4"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Fiyat
            </label>
            <input
              type="number"
              value={editedProduct.price}
              onChange={(e) => setEditedProduct({...editedProduct, price: parseFloat(e.target.value)})}
              className="w-full border p-2 rounded focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Kategori
            </label>
            <select
              value={editedProduct.category}
              onChange={(e) => setEditedProduct({...editedProduct, category: e.target.value})}
              className="w-full border p-2 rounded focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Kategori Seçin</option>
              <option value="electronics">Elektronik</option>
              <option value="jewelery">Takı</option>
              <option value="men's clothing">Erkek Giyim</option>
              <option value="women's clothing">Kadın Giyim</option>
            </select>
          </div>
        </div>
        
        <div className="flex justify-end space-x-2 mt-6">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
          >
            İptal
          </button>
          <button
            onClick={() => onSave(editedProduct)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Kaydet
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditModal;