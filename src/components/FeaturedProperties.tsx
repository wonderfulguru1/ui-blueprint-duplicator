import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { PropertyCard } from "./PropertyCard";
import { useProducts } from "@/hooks/useProducts";
export const FeaturedProperties = () => {
  const { data: products, isLoading, isError, refetch } = useProducts();
  return (
    <section className="g-properties g-section">
      <div className="g-section-heading">
        <div>
          <p className="g-eyebrow">03 / EXPLORE OUR COLLECTION</p>
          <h2>
            A place for your
            <br />
            <em>next chapter.</em>
          </h2>
        </div>
        <Link to="/products" className="g-inline-link">
          View all properties <ArrowUpRight size={18} />
        </Link>
      </div>
      {isLoading && (
        <p role="status" className="g-status">
          Loading properties…
        </p>
      )}
      {isError && (
        <div className="g-status" role="alert">
          <p>We couldn’t load our properties.</p>
          <button onClick={() => refetch()} className="g-inline-link">
            Try again
          </button>
        </div>
      )}
      {products && products.length > 0 && (
        <div className="g-property-grid">
          {products.map((p) => (
            <Link key={p.id} to={`/products/${p.id}`}>
              <PropertyCard
                image={p.image}
                price={p.price}
                title={p.title}
                location={p.location}
                type={p.type}
                agent={{ name: p.agent_name, avatar: p.agent_avatar }}
                timeAgo={p.time_ago}
                sqft={p.sqft}
                showPrice={p.show_price}
              />
            </Link>
          ))}
        </div>
      )}
      {products?.length === 0 && (
        <p className="g-status">
          Our next collection is coming soon.{" "}
          <Link to="/contact">Speak with our team about available plots.</Link>
        </p>
      )}
    </section>
  );
};
