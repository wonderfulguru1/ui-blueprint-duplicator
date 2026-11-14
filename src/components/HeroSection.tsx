import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  MapPin,
} from "lucide-react";
import first from "@/assets/about-hero.jpg";
import second from "@/assets/about-hero3.jpg";
import third from "@/assets/about-hero1.jpg";
const scenes = [
  {
    image: first,
    name: "A place to build your future",
    detail: "Land. Possibility. A lasting foundation.",
  },
  {
    image: second,
    name: "Build your dream with us",
    detail: "Prime locations. A world of possibility.",
  },
  {
    image: third,
    name: "Your next smart move",
    detail: "Discover your next chapter in Abuja.",
  },
];
export const HeroSection = () => {
  const [scene, setScene] = useState(0);
  return (
    <section className="g-hero" aria-label="Welcome to Genesia Properties">
      <div className="g-hero-images">
        {scenes.map((item, i) => (
          <img
            key={item.image}
            src={item.image}
            alt={i === scene ? item.name : ""}
            aria-hidden={i !== scene}
            className={i === scene ? "active" : ""}
            fetchPriority={i === 0 ? "high" : "auto"}
          />
        ))}
      </div>
      <div className="g-hero-shade" />
      <div className="g-hero-content">
        <p className="g-eyebrow">
          <span /> A NEW PERSPECTIVE ON OWNERSHIP
        </p>
        <h1>
          Affordable today.
          <br />
          <em>Priceless</em> tomorrow.
        </h1>
        <p className="g-hero-copy">
          At Genesia Properties, we offer more than land — we offer possibility.
          Discover your place in Abuja’s next chapter.
        </p>
        <div className="g-hero-actions">
          <Link className="g-button g-gold" to="/products">
            Explore our properties <ArrowUpRight size={18} />
          </Link>
          <Link className="g-text-link" to="/about-us">
            Discover Genesia <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
      <aside className="g-scene-label">
        <MapPin size={15} />
        <span>ABUJA, NIGERIA</span>
        <div className="g-scene-line" />
        <p>{scenes[scene].detail}</p>
      </aside>
      <div className="g-hero-bottom">
        <button
          className="g-scroll"
          onClick={() =>
            document
              .getElementById("our-story")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <ArrowDown size={17} /> Scroll to discover
        </button>
        <span className="g-scene-name">{scenes[scene].name}</span>
        <div className="g-scene-controls">
          <span>
            0{scene + 1}
            <small> / 03</small>
          </span>
          <button
            aria-label="Previous scene"
            onClick={() => setScene((scene + 2) % 3)}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            aria-label="Next scene"
            onClick={() => setScene((scene + 1) % 3)}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
      <span className="g-image-note">Architectural inspiration</span>
    </section>
  );
};
