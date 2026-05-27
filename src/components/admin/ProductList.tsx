import React, { useState } from 'react';
import { Product } from '@/lib/supabase';
import { useDeleteProduct } from '@/hooks/useAdminProducts';
import { Button } from '@/components/ui/button';
import { Pencil, Trash2, MapPin, Maximize2 } from 'lucide-react';
import { ProductForm } from './ProductForm';

interface Props {
  products: Product[];
}

export const ProductList: React.FC<Props> = ({ products }) => {
  const [editing, setEditing] = useState<Product | null>(null);
  const deleteProduct = useDeleteProduct();

  const handleDelete = (id: string, title: string) => {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
    deleteProduct.mutate(id);
  };

  if (products.length === 0) {
    return (
      <div className="text-center py-20 text-gray-400">
        <p className="text-lg">No products yet.</p>
        <p className="text-sm mt-1">Click "Add Product" to create your first listing.</p>
      </div>
    );
  }

  return (
    <>
      <div className="space-y-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:border-gray-200 transition-colors"
          >
            {/* Thumbnail */}
            <div className="w-24 h-18 shrink-0 rounded-lg overflow-hidden bg-gray-100">
              <img
                src={product.image}
                alt={product.title}
                className="w-24 h-20 object-cover"
              />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <p className="font-semibold text-[#06112a] truncate">{product.title}</p>
                <span className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 font-medium shrink-0">
                  {product.type}
                </span>
              </div>
              <div className="flex items-center gap-1 text-sm text-gray-500 mt-0.5">
                <MapPin className="w-3 h-3 shrink-0" />
                <span className="truncate">{product.location}</span>
              </div>
              <div className="flex items-center gap-3 mt-1.5 text-xs text-gray-400">
                <span className="font-semibold text-[#D2A136]">{product.price}</span>
                <span>·</span>
                <span className="flex items-center gap-0.5">
                  <Maximize2 className="w-3 h-3" />
                  {product.sqft}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2 shrink-0">
              <Button
                size="sm"
                variant="outline"
                className="gap-1.5"
                onClick={() => setEditing(product)}
              >
                <Pencil className="w-3.5 h-3.5" />
                Edit
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="text-red-500 hover:text-red-700 hover:border-red-200 hover:bg-red-50"
                onClick={() => handleDelete(product.id, product.title)}
                disabled={deleteProduct.isPending}
              >
                <Trash2 className="w-3.5 h-3.5" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {editing && (
        <ProductForm
          key={editing.id}
          open={!!editing}
          onClose={() => setEditing(null)}
          product={editing}
        />
      )}
    </>
  );
};
