import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import image from "@/assets/about-hero1.jpg";
export const AboutUsSection = () => (
  <section className="g-story g-section" id="our-story">
    <div className="g-story-image">
      <img
        src={image}
        alt="Architectural inspiration for a future home"
        loading="lazy"
      />
      <span>THE FOUNDATION FOR YOUR DREAM</span>
    </div>
    <div className="g-story-copy">
      <p className="g-eyebrow">01 / THE GENESIA STORY</p>
      <h2>
        Your next smart move
        <br />
        <em>starts here.</em>
      </h2>
      <p>
        Genesia Properties is built on a simple idea: owning land in Abuja
        shouldn’t be complicated — it should be clear, secure, and within reach.
      </p>
      <p>
        We’re here to help a new generation of landowners take confident steps
        into real estate, with affordable plots in high-growth areas around
        Abuja. Flexible payment plans, low entry costs, and a transparent
        process mean you don’t have to wait years to start building your future.
      </p>
      <p>
        For personal use, long-term investment, or future development, we’re
        committed to making your land ownership journey smooth and rewarding.
      </p>
      <Link className="g-inline-link" to="/about-us">
        Get to know Genesia <ArrowUpRight size={18} />
      </Link>
    </div>
  </section>
);
