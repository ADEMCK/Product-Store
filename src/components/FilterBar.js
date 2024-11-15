import React from 'react';

function FilterBar({ onFilterChange }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <select
          className="border p-2 rounded"
          onChange={(e) => onFilterChange('category', e.target.value)}
        >
          <option value="">Tüm Kategoriler</option>
          <option value="electronics">Elektronik</option>
          <option value="jewelery">Takı</option>
          <option value="men's clothing">Erkek Giyim</option>
          <option value="women's clothing">Kadın Giyim</option>
        </select>
        
        <select
          className="border p-2 rounded"
          onChange={(e) => onFilterChange('priceRange', e.target.value)}
        >
          <option value="">Fiyat Aralığı</option>
          <option value="0-50">0-50 TL</option>
          <option value="50-100">50-100 TL</option>
          <option value="100+">100+ TL</option>
        </select>
        
        <input
          type="text"
          placeholder="Ürün Ara..."
          className="border p-2 rounded"
          onChange={(e) => onFilterChange('search', e.target.value)}
        />
      </div>
    </div>
  );
}

export default FilterBar;