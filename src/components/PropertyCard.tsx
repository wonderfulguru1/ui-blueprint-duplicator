import { ArrowUpRight, MapPin, Maximize } from "lucide-react";
interface PropertyCardProps {
  image: string;
  price: string;
  monthlyPrice?: string;
  title: string;
  location: string;
  type: "Sale" | "Rent";
  agent: { name: string; avatar: string };
  timeAgo: string;
  sqft: string;
  showPrice?: boolean;
}
export const PropertyCard = ({
  image,
  price,
  monthlyPrice,
  title,
  location,
  type,
  agent,
  timeAgo,
  sqft,
  showPrice = true,
}: PropertyCardProps) => (
  <article className="g-property">
    <div className="g-property-image">
      <img src={image} alt={title} loading="lazy" />
      <span className="g-property-type">FOR {type.toUpperCase()}</span>
      <span className="g-property-arrow">
        <ArrowUpRight size={21} />
      </span>
    </div>
    <div className="g-property-body">
      <p className="g-property-location">
        <MapPin size={13} />
        {location}
      </p>
      <h3>{title}</h3>
      <div className="g-property-meta">
        <span>{showPrice ? monthlyPrice || price : "Price on request"}</span>
        {sqft && (
          <span>
            <Maximize size={13} />
            {sqft}
          </span>
        )}
      </div>
      {agent.name && (
        <p className="g-property-agent">
          {agent.name}
          {timeAgo ? ` · ${timeAgo}` : ""}
        </p>
      )}
    </div>
  </article>
);
