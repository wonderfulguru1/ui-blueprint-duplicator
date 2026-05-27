import React from 'react';
import { Link } from 'react-router-dom';
import { PropertyCard } from './PropertyCard';
import { useProducts } from '@/hooks/useProducts';

export const FeaturedProperties: React.FC = () => {
  const { data: products, isLoading, isError } = useProducts();

  return (
    <section className="w-full bg-[#F7F7F7] py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 md:mb-16">
          <div className="inline-block">
            <span className="inline-block px-4 py-2 bg-blue-100 text-[#06112a] text-sm font-semibold rounded-full mb-4 tracking-wide uppercase">
              Our Products
            </span>
          </div>
          <h2 className="text-[#06112a] text-3xl md:text-[50px] font-bold leading-tight md:leading-[70px]">
            Featured Products
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6"></div>
        </header>

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
