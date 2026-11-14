import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import image from "@/assets/about-hero3.jpg";
export const CallToActionBanner = () => (
  <section className="g-cta">
    <img src={image} alt="" loading="lazy" />
    <div>
      <p className="g-eyebrow">YOUR FUTURE STARTS WITH A CONVERSATION</p>
      <h2>
        Find your place.
        <br />
        <em>Make it yours.</em>
      </h2>
      <p>
        Discover your perfect home with our comprehensive real estate solutions.
        We’re here to help you every step of the way.
      </p>
      <Link className="g-button g-gold" to="/appointment">
        Book an appointment <ArrowUpRight size={18} />
      </Link>
      <a
        className="g-text-link"
        href="https://wa.me/2348065046516"
        target="_blank"
        rel="noopener noreferrer"
      >
        Talk to our team <ArrowUpRight size={16} />
      </a>
    </div>
  </section>
);
