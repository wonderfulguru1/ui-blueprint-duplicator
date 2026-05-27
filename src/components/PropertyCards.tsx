import React from 'react';
import { Link } from 'react-router-dom';
import { PropertyCard } from './PropertyCard';
import { useProducts } from '@/hooks/useProducts';

export const PropertyCards: React.FC = () => {
  const { data: products, isLoading, isError } = useProducts();

  return (
    <section className="items-center z-0 flex w-full flex-col justify-center bg-[#F7F7F7] py-28 max-md:max-w-full max-md:py-[100px]">
      <div className="max-w-[1320px] w-full flex flex-col items-stretch px-4">

        {isLoading && (
          <div className="flex justify-center items-center py-20 text-gray-500">
            Loading products...
          </div>
        )}

        {isError && (
          <div className="flex justify-center items-center py-20 text-red-500">
            Failed to load products. Please try again.
          </div>
        )}

        {products && products.length > 0 && (
          <div className="mt-[72px] max-md:mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Link key={product.id} to={`/products/${product.id}`} className="block hover:scale-[1.01] transition-transform duration-200">
                  <PropertyCard
                    image={product.image}
                    price={product.price}
                    title={product.title}
                    location={product.location}
                    type={product.type}
                    agent={{ name: product.agent_name, avatar: product.agent_avatar }}
                    timeAgo={product.time_ago}
                    sqft={product.sqft}
                    showPrice={product.show_price}
                  />
                </Link>
              ))}
            </div>
          </div>
        )}

        {products && products.length === 0 && !isLoading && (
          <div className="flex justify-center items-center py-20 text-gray-500">
            No products available at the moment.
          </div>
        )}
      </div>
    </section>
  );
};
